import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Database, TrendingUp, Zap, ChartArea } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pipeline de Dados com AWS",
      description: "Sistema de ETL completo para a visualização do impacto na indústria audiovisual no período da Pandemia ",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "AWS S3", "AWS Glue", "Athena", "Lambda", "QuickSight"],
      highlights: [
        "Todo o processo de ETL no ambiente cloud utilizando os serviços da AWS",
        "Execução de funções Python para realizar as requisições de API",
        "Construção de Jobs com o Amazon Glue para relizar alguns processo de ETL",
        "Modelagem de dados, relacional e dimensional",
        "Consultas via SQL utilizando o Amazon Athena",
        "Visualização e insights utilizando o Amazon QuickSight",
      ],
      
      // githubUrl: "#",
      category: "Cloud",
      icon: Zap
    },
    {
      title: "Análise de Dados",
      description: "Análise de Dados sobre o Processo de Anistia no Brasil - Dataset Público",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Pandas", "SQL", "Matplotlib", "Jupyter"],
      highlights: [
        "Limpeza e padronização do dataset com Pandas",
        "Gráficos com Matplotlib para a visualização dos insights",
      ],
      // githubUrl: "#",
      category: "Data Analytics",
      icon: ChartArea
    },
    {
      title: "Analytics Dashboard",
      description: "Projeto de implementação de dados em uma empresa que quer tomar decisões mais rápidas sobre o estoque e promoções.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "Python", "PostgreSQL", "FastAPI", "Redis"],
      highlights: [
        "Processo de ETL",
        "Dashboard interativo"
      ],
      // githubUrl: "#",
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

                    {/* Action Buttons
                    <div className="flex space-x-4">
                      <Button variant="hero" size="sm" className="group" >
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        Ver Código
                      </Button>
                    </div> */}
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
              Visite meu GitHub para explorar outros projetos
            </p>
            <a
              href="https://github.com/carlospaiva88"
              className="inline-block group text-muted-foreground hover:text-data-blue transition-colors duration-300 hover:scale-110 transform px-4 py-2 rounded-md text-lg bg-hero"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;