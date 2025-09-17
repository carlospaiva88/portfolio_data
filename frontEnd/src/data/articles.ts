// data/articles.ts

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;       // ISO 8601 string
  imageUrl?: string;
  author: string;
  content: string;    // HTML content
}

export const articles: Article[] = [
{
  slug: "otimizando-data-pipelines-no-aws-glue",
  title: "Otimizando Data Pipelines no AWS Glue",
  description: "Aprenda a reduzir custos e aumentar a performance de ETLs em Python e PySpark utilizando o AWS Glue, a solução serverless da Amazon para integração de dados.",
  category: "Cloud",
  date: "2025-09-17T10:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Introdução</h2>
    <p>Com o aumento do volume de dados gerados diariamente, a construção de <strong>pipelines de dados otimizados</strong> tornou-se essencial para empresas que dependem de informações rápidas e precisas. O <strong>AWS Glue</strong>, serviço <em>serverless</em> da Amazon Web Services, oferece uma infraestrutura escalável para processar e transformar dados usando <strong>Python</strong> e <strong>PySpark</strong>. No entanto, para obter o máximo da plataforma, é preciso aplicar boas práticas que garantam <strong>performance, escalabilidade e redução de custos</strong>.</p>

    <h2>O que é o AWS Glue?</h2>
    <p>O <strong>AWS Glue</strong> é uma ferramenta de integração de dados que automatiza processos de <em>ETL</em> (Extract, Transform, Load). Ele permite criar pipelines de forma ágil, com suporte a múltiplos formatos de dados (JSON, Parquet, ORC, CSV, entre outros) e integração nativa com serviços como <strong>Amazon S3, Redshift e RDS</strong>. A principal vantagem é ser <em>serverless</em>, eliminando a necessidade de gerenciar infraestrutura.</p>

    <h2>Boas práticas para otimizar pipelines no AWS Glue</h2>
    
    <h3>1. Escolha do formato de dados</h3>
    <p>Formatos compactados e otimizados, como <strong>Parquet</strong> e <strong>ORC</strong>, reduzem custos de armazenamento e aceleram consultas analíticas. Sempre que possível, converta arquivos CSV ou JSON para esses formatos.</p>

    <h3>2. Particionamento eficiente</h3>
    <p>Estruture seus dados no <strong>Amazon S3</strong> com particionamento baseado em chaves de consulta (por exemplo: <code>ano/mes/dia/</code>). Isso melhora a performance ao evitar a leitura desnecessária de grandes volumes de dados.</p>

    <h3>3. Uso de DynamicFrame vs DataFrame</h3>
    <p>O Glue introduz o conceito de <strong>DynamicFrame</strong>, que facilita a transformação de dados sem definir um esquema fixo. No entanto, quando o desempenho for crítico, considere converter para <code>DataFrame</code> do Spark, que é mais eficiente em operações complexas.</p>

    <h3>4. Ajuste do número de workers</h3>
    <p>O Glue permite escolher diferentes tipos e quantidades de workers. Utilize <em>G.1X</em> para cargas menores e <em>G.2X</em> ou <em>G.025X</em> para pipelines pesados. O segredo é monitorar o custo-benefício: mais workers reduzem tempo, mas aumentam o custo.</p>

    <h3>5. Cache e reuso de dados</h3>
    <p>Se o pipeline acessa a mesma fonte repetidamente, use técnicas de <em>caching</em> em PySpark ou salve resultados intermediários no S3. Isso evita leituras redundantes e acelera execuções futuras.</p>

    <h3>6. Monitoramento e logs</h3>
    <p>Ative logs detalhados no <strong>CloudWatch</strong> para identificar gargalos e aplicar melhorias contínuas. Além disso, configure alarmes para detectar falhas em tempo real.</p>

    <h2>Escalabilidade e custo</h2>
    <p>A grande vantagem do AWS Glue é sua <strong>escalabilidade automática</strong>. Diferente de clusters Spark gerenciados manualmente, o Glue ajusta a capacidade conforme a carga de trabalho, garantindo melhor uso de recursos. Isso, aliado a boas práticas de formatação e particionamento, resulta em pipelines mais rápidos e econômicos.</p>

    <h2>Exemplo prático de otimização</h2>
    <pre><code class="language-python">
    import sys
    from awsglue.transforms import *
    from awsglue.utils import getResolvedOptions
    from pyspark.context import SparkContext
    from awsglue.context import GlueContext
    from awsglue.job import Job

    args = getResolvedOptions(sys.argv, ["JOB_NAME"])
    sc = SparkContext()
    glueContext = GlueContext(sc)
    spark = glueContext.spark_session
    job = Job(glueContext)
    job.init(args["JOB_NAME"], args)

    # Leitura otimizada em Parquet
    df = spark.read.parquet("s3://meu-bucket/dados/parquet/")

    # Particionamento para melhor performance
    df.write.partitionBy("ano", "mes").mode("overwrite").parquet("s3://meu-bucket/dados-processados/")

    job.commit()
    </code></pre>

    <h2>Quando usar AWS Glue vs outras soluções?</h2>
    <p>O AWS Glue é indicado para pipelines que exigem <strong>flexibilidade, escalabilidade e baixo overhead de manutenção</strong>. Para workloads massivos em tempo real, soluções como <strong>Kinesis Data Analytics</strong> podem ser mais adequadas. Já para ambientes de <em>big data</em> muito personalizados, clusters EMR ainda têm relevância.</p>

    <h2>Conclusão</h2>
    <p>Ao aplicar boas práticas no <strong>AWS Glue</strong>, é possível criar pipelines de dados altamente otimizados, reduzindo custos e aumentando a velocidade de processamento. O segredo está em escolher os formatos corretos, particionar os dados adequadamente e ajustar os recursos de execução conforme a demanda.</p>

    <h2>Leitura recomendada</h2>
    <ul>
      <li><a href="https://amzn.to/3AWSglueBook" target="_blank">Livro: Data Lake Architecture com AWS (Amazon Affiliate)</a></li>
      <li><a href="https://amzn.to/3BigDataTools" target="_blank">Guia prático de Big Data e ETL (Amazon Affiliate)</a></li>
      <li><a href="https://aws.amazon.com/glue/" target="_blank">Documentação oficial do AWS Glue</a></li>
    </ul>
  `
},

  {
  slug: "react-server-components",
  title: "React Server Components: Desvendando o Futuro",
  description: "Como os React Server Components aceleram seus apps React.",
  category: "Frontend",
  date: "2025-09-10T14:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>O que são React Server Components?</h2>
    <p>Os <strong>React Server Components (RSCs)</strong> são uma nova forma de renderização em que parte da lógica do componente é executada no servidor e apenas o resultado final é enviado para o cliente. Isso reduz o peso do bundle e melhora a performance.</p>

    <h2>Benefícios</h2>
    <ul>
      <li><strong>SEO aprimorado:</strong> o conteúdo já vem renderizado do servidor.</li>
      <li><strong>Menor tempo de carregamento:</strong> menos JavaScript é enviado para o navegador.</li>
      <li><strong>Arquitetura simplificada:</strong> permite separar responsabilidades entre cliente e servidor.</li>
    </ul>

    <h2>Como usar</h2>
    <p>É necessário estar usando <strong>React 18+</strong> e um framework compatível como <strong>Next.js 13</strong>. Basta criar arquivos com a extensão <code>.server.js</code> ou <code>.server.tsx</code> para indicar que o componente roda no servidor.</p>

    <h2>Exemplo prático</h2>
    <pre><code class="language-jsx">
    // PostList.server.jsx
    import db from '../lib/db';

    export default async function PostList() {
      const posts = await db.getPosts();
      return (
        <ul>
          {posts.map(post => &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;)}
        </ul>
      );
    }
    </code></pre>

    <h2>Conclusão</h2>
    <p>Os React Server Components representam um grande avanço na forma de construir aplicações React, oferecendo mais performance e melhor experiência do usuário.</p>

    <h2>Leitura recomendada</h2>
    <ul>
      <li><a href="https://react.dev/learn/server-components" target="_blank">Documentação oficial React Server Components</a></li>
      <li><a href="https://amzn.to/3ReactNextBook" target="_blank">Livro: React com Next.js (Amazon Affiliate)</a></li>
    </ul>
  `
},

 {
  slug: "aprenda-docker-de-zero",
  title: "Aprenda Docker do Zero e Melhore sua Produtividade",
  description: "Guia completo para iniciantes entenderem Docker e containerização.",
  category: "DevOps",
  date: "2025-09-10T10:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Introdução ao Docker</h2>
    <p>O <strong>Docker</strong> revolucionou a forma como desenvolvedores criam e distribuem aplicações, fornecendo ambientes isolados e consistentes.</p>

    <h2>Containers vs Virtual Machines</h2>
    <p>Diferente das <strong>VMs</strong>, os containers compartilham o kernel do sistema operacional, tornando-os mais leves e rápidos de inicializar.</p>

    <h2>Configurações básicas</h2>
    <pre><code class="language-bash">
    # Criando e rodando um container
    docker run -d -p 8080:80 nginx
    </code></pre>
    <p>Esse comando cria um container do <code>nginx</code> e o disponibiliza na porta 8080.</p>

    <h2>Benefícios</h2>
    <ul>
      <li>Agilidade no desenvolvimento.</li>
      <li>Portabilidade entre ambientes.</li>
      <li>Facilidade em CI/CD.</li>
    </ul>

    <h2>Conclusão</h2>
    <p>Com Docker, equipes conseguem acelerar entregas e padronizar ambientes, reduzindo erros e custos.</p>

    <h2>Leitura recomendada</h2>
    <ul>
      <li><a href="https://amzn.to/3DockerBook" target="_blank">Livro: Docker para Desenvolvedores (Amazon Affiliate)</a></li>
      <li><a href="https://docs.docker.com/" target="_blank">Documentação oficial do Docker</a></li>
    </ul>
  `
},

{
  slug: "segredos-para-um-backend-escala",
  title: "Segredos para Construir um Backend Escalável",
  description: "Dicas e boas práticas para fazer seu backend escalar.",
  category: "Backend",
  date: "2025-09-08T14:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Arquitetura escalável</h2>
    <p>Um backend escalável começa com a divisão de responsabilidades: <strong>microserviços</strong>, <strong>APIs desacopladas</strong> e <strong>mensageria</strong> são práticas fundamentais.</p>

    <h2>Gerenciamento de estado</h2>
    <ul>
      <li><strong>Cache:</strong> use Redis ou Memcached para reduzir consultas a banco.</li>
      <li><strong>Filas:</strong> RabbitMQ e Kafka ajudam a processar tarefas em paralelo.</li>
      <li><strong>Bancos escaláveis:</strong> escolha bancos NoSQL ou particionamento de SQL.</li>
    </ul>

    <h2>Monitoramento e testes</h2>
    <p>Ferramentas como <strong>Prometheus</strong> e <strong>Grafana</strong> ajudam na observabilidade. Combine com testes automatizados para garantir confiabilidade.</p>

    <h2>Conclusão</h2>
    <p>Escalar não é só adicionar servidores: é adotar boas práticas de arquitetura e monitoramento.</p>
  `
},

  {
  slug: "tendencias-de-inteligencia-artificial",
  title: "Tendências de Inteligência Artificial para 2025",
  description: "Novidades e desafios no mundo da IA.",
  category: "IA",
  date: "2025-09-05T09:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Modelos generativos</h2>
    <p>Ferramentas como <strong>GPT-4</strong>, <strong>DALL·E</strong> e <strong>Stable Diffusion</strong> estão revolucionando a criatividade digital.</p>

    <h2>IA explicável</h2>
    <p>Com a adoção em larga escala, cresce a necessidade de <strong>transparência e ética</strong> na IA. Modelos precisam ser auditáveis.</p>

    <h2>2025 e além</h2>
    <p>Veremos avanços em <strong>agentes autônomos</strong>, <strong>IA em tempo real</strong> e <strong>personalização em escala</strong>.</p>

    <h2>Leitura recomendada</h2>
    <ul>
      <li><a href="https://amzn.to/3AITrendsBook" target="_blank">Livro: Inteligência Artificial e Negócios (Amazon Affiliate)</a></li>
      <li><a href="https://ai.google/" target="_blank">Pesquisas em IA da Google</a></li>
    </ul>
  `
},

{
  slug: "cloud-para-desenvolvedores",
  title: "Cloud Computing para Desenvolvedores: O Guia Completo",
  description: "Conheça plataformas e estratégias cloud para desenvolvimento.",
  category: "Cloud",
  date: "2025-09-02T11:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Por que migrar para a nuvem?</h2>
    <p>Adoção de <strong>cloud</strong> garante <em>agilidade, elasticidade e redução de custos</em> para empresas de todos os tamanhos.</p>

    <h2>Principais provedores</h2>
    <ul>
      <li><strong>AWS:</strong> líder em serviços e variedade.</li>
      <li><strong>Azure:</strong> integração forte com o ecossistema Microsoft.</li>
      <li><strong>Google Cloud:</strong> foco em dados e IA.</li>
    </ul>

    <h2>Ferramentas para devs</h2>
    <p>Entre os serviços essenciais estão <strong>Lambda</strong>, <strong>Cloud Run</strong>, <strong>Firestore</strong> e <strong>CI/CD nativo</strong>.</p>

    <h2>Conclusão</h2>
    <p>A nuvem é hoje parte central do desenvolvimento moderno. Investir em cloud é investir em competitividade.</p>
  `
},

  {
  slug: "melhores-praticas-para-seguranca-web",
  title: "Melhores Práticas de Segurança Web para 2025",
  description: "Como proteger suas aplicações de ameaças atuais.",
  category: "Segurança",
  date: "2025-08-30T15:00:00-03:00",
  imageUrl: "https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg",
  author: "Carlos Paiva",
  content: `
    <h2>Proteja contra explorações comuns</h2>
    <p>Ataques como <strong>XSS</strong>, <strong>CSRF</strong> e <strong>injeção SQL</strong> continuam sendo os mais explorados. Utilize validação de entradas e frameworks seguros.</p>

    <h2>Autenticação segura</h2>
    <p>Prefira <strong>OAuth 2.0</strong>, <strong>OpenID Connect</strong> e <strong>tokens JWT</strong> com expiração curta. Nunca armazene senhas em texto plano.</p>

    <h2>Monitoramento e updates</h2>
    <p>Configure <strong>logs centralizados</strong>, alertas em tempo real e mantenha dependências sempre atualizadas.</p>

    <h2>Leitura recomendada</h2>
    <ul>
      <li><a href="https://owasp.org/" target="_blank">OWASP Top 10</a></li>
      <li><a href="https://amzn.to/3CyberSecurityBook" target="_blank">Livro: Segurança Cibernética Moderna (Amazon Affiliate)</a></li>
    </ul>
  `
},

];
