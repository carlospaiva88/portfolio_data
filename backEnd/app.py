from flask import Flask, request, jsonify, send_file
from flask_restful import Api, Resource, abort
import psycopg2
import os
import re
from dotenv import load_dotenv
from datetime import datetime
from pathlib import Path
import requests
import json
from user_agents import parse


load_dotenv()

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

def validate_email(email):
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)


@app.route('/health')
def health():
    return jsonify({'status': 'healthy'}), 200


def get_geo_by_ip(ip):
    try:
        if ip == '127.0.0.1':
            return {}
        resposta = requests.get(f"http://ip-api.com/json/{ip}?fields=status,country,regionName,city")
        resposta.raise_for_status()
        dados = resposta.json()
        if dados.get("status") == "success":
            return dados
        return {}
    except Exception as e:
        app.logger.error(f"Erro na geolocalização: {e}")
        return {}


@app.route('/api/download_cv', methods=['POST'])
def download_cv():
    try:
        origem = request.json.get('origem', '') if request.is_json else ''
    except:
        origem = ''

    user_agent_string = request.headers.get('User-Agent', '')
    user_agent = parse(user_agent_string)
    browser_data = {
        "browser": user_agent.browser.family,
        "version": user_agent.browser.version_string,
        "platform": user_agent.os.family,
        "device": user_agent.device.family,
        "language": request.headers.get('Accept-Language', ''),
        "user_agent": user_agent_string
    }

    geo = get_geo_by_ip(request.remote_addr)
    city = geo.get('city', '')
    country = geo.get('country', '')

    try:
        conn = psycopg2.connect(
            host=os.getenv('DB_HOST'),
            database=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            port=os.getenv('DB_PORT')
        )
        cur = conn.cursor()
        cur.execute(
            """
            INSERT INTO download_logs
            (user_ip, user_agent, referrer, origem, city, country, browser_data, geo_data)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """,
            (
                request.remote_addr,
                user_agent_string,
                request.headers.get('Referer'),
                origem,
                city,
                country,
                json.dumps(browser_data),
                json.dumps(geo)
            )
        )
        conn.commit()
    except Exception as e:
        app.logger.error(f"Erro ao registrar download: {e}")
        return {"status": "error", "message": str(e)}, 500
    finally:
        if conn:
            conn.close()

    cv_path = Path(__file__).parent / 'static' / 'cv' / 'cv-data-engineer-25.pdf'
    if not cv_path.exists():
        return {"status": "error", "message": "Arquivo do CV não encontrado no servidor"}, 404

    return send_file(
        cv_path,
        as_attachment=True,
        download_name='cv-data-engineer-25.pdf',
        mimetype='application/pdf'
    )

class ContactMessage(Resource):
    def post(self):
        data = request.get_json()
        if not data or not all(key in data for key in ['name', 'email', 'subject', 'message']):
            abort(400, message="Campos obrigatórios faltando.")
        if not validate_email(data['email']):
            abort(400, message="E-mail inválido.")

        conn = None
        try:
            conn = psycopg2.connect(
                host=os.getenv('DB_HOST'),
                database=os.getenv('DB_NAME'),
                user=os.getenv('DB_USER'),
                password=os.getenv('DB_PASSWORD'),
                port=os.getenv('DB_PORT')
            )
            cur = conn.cursor()
            cur.execute(
                """
                INSERT INTO contact_messages 
                (name, email, subject, message) 
                VALUES (%s, %s, %s, %s)
                """,
                (
                    data['name'],
                    data['email'],
                    data['subject'],
                    data['message']
                )
            )
            conn.commit()
            return {"status": "success", "message": "Mensagem recebida!"}
        except Exception as e:
            abort(500, message=f"Erro ao salvar mensagem. Detalhes: {str(e)}")
        finally:
            if conn:
                conn.close()


api.add_resource(ContactMessage, '/api/contact')

if __name__ == '__main__':
    import os
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
