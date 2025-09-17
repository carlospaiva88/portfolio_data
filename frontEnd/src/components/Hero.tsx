import { useState } from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-data-bg.jpg";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
  setIsDownloading(true);
  try {
    const response = await fetch('http://localhost:5000/api/download_cv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ origem: window.location.href })
      // Se quiser enviar mais dados: body: JSON.stringify({ ... })
    });
    if (!response.ok) {
      throw new Error('Erro ao baixar o CV');
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/pdf')) {
      throw new Error('Resposta inválida, não é um PDF');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cv-data-engineer-25.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Erro ao baixar o CV:', error);
    alert('Erro ao baixar o CV. Tente novamente ou entre em contato.');
  } finally {
    setIsDownloading(false);
  }
};


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <Badge variant="secondary" className="mb-4 bg-gradient-secondary text-white border-0">
            🚀 Disponível para novas oportunidades
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Olá, eu sou</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Carlos</span>
            <span className="block text-foreground text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
              Data Engineer
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformo dados brutos em insights valiosos através de pipelines robustos,
            arquiteturas escaláveis e soluções inovadoras de engenharia de dados.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Python", "Apache Spark", "SQL", "AWS", "Docker", "ETL/ELT", "Apache Airflow", "Big Data"].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-data-blue text-data-blue hover:bg-data-blue hover:text-background transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={handleDownloadCV}
              disabled={isDownloading}
            >
              <Download className={`mr-2 h-5 w-5 ${isDownloading ? "animate-spin" : "group-hover:animate-bounce"}`} />
              {isDownloading ? "Baixando..." : "Download CV"}
            </Button>
            <Button variant="outline_glow" size="xl">
              Ver Projetos
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/carlospaiva88/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-data-blue transition-colors duration-300 hover:scale-110 transform" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/carlospaiva88" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-data-blue transition-colors duration-300 hover:scale-110 transform" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-data-blue" />
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-accent rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
}
