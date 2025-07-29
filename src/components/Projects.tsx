import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Database, TrendingUp, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pipeline de Dados E-commerce",
      description: "Sistema completo de ETL para processar dados de vendas em tempo real, com ingestão de múltiplas fontes, transformações complexas e carregamento em data warehouse.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Apache Spark", "Kafka", "AWS S3", "Redshift", "Airflow"],
      highlights: [
        "Processamento de 1TB+ de dados diários",
        "Redução de 60% no tempo de processamento",
        "Arquitetura escalável e fault-tolerant"
      ],
      githubUrl: "#",
      demoUrl: "#",
      category: "Real-time Processing",
      icon: Zap
    },
    {
      title: "Data Lake Architecture",
      description: "Implementação de data lake moderna com governança de dados, catálogo automatizado e pipelines de qualidade de dados para suporte a analytics e ML.",
      image: "/api/placeholder/600/400",
      technologies: ["AWS", "Delta Lake", "Databricks", "Terraform", "Python", "SQL"],
      highlights: [
        "Arquitetura medallion (Bronze, Silver, Gold)",
        "Automação completa de deploy",
        "Catálogo de dados automatizado"
      ],
      githubUrl: "#",
      demoUrl: "#",
      category: "Data Architecture",
      icon: Database
    },
    {
      title: "Analytics Dashboard Platform",
      description: "Plataforma de dashboards em tempo real para KPIs de negócio, integrando múltiplas fontes de dados com visualizações interativas e alertas automáticos.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "Python", "PostgreSQL", "Docker", "FastAPI", "Redis"],
      highlights: [
        "Dashboards em tempo real",
        "Sistema de alertas inteligentes",
        "API REST para integração"
      ],
      githubUrl: "#",
      demoUrl: "#",
      category: "Business Intelligence",
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-primary text-white border-0">
              🚀 Projetos
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projetos em Destaque
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seleção dos meus principais projetos de engenharia de dados, 
              demonstrando soluções end-to-end e impacto nos resultados de negócio
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-elegant group overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-white opacity-80" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-6 p-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="border-data-blue text-data-blue">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-data-blue transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Principais Resultados:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-data-green rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Tecnologias:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-muted text-muted-foreground hover:border-data-purple hover:text-data-purple transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button variant="hero" size="sm" className="group">
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        Ver Código
                      </Button>
                      <Button variant="outline_glow" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Demo Live
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Quer ver mais projetos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Visite meu GitHub para explorar outros projetos e contribuições open source
            </p>
            <Button variant="gradient" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Ver no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;