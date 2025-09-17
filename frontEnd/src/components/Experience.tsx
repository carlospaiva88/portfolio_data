import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Autônomo — Desenvolvimento e Gestão de Blogs",
      company: "Trabalho Autônomo",
      period: "Set 2025 – Presente",
      location: "Remoto",
      type: "Autônomo",
      description:
        "Desenvolvimento e gestão de blogs em diversos nichos, incluindo a criação de conteúdos e estratégias para produtos afiliados, visando crescimento orgânico e monetização.",
      achievements: [
        "Criação e manutenção contínua de blogs em diferentes áreas de interesse",
        "Implementação de estratégias de vendas e marketing de produtos afiliados",
        "Otimização de SEO para melhorar desempenho e alcance dos blogs",
        "Gestão completa dos processos de publicação, análise de métricas e atendimento ao público"
      ],
      technologies: ["SEO", "WordPress", "Google Analytics", "Marketing de Conteúdo", "Affiliate Marketing"]
    },
    {
      title: "Estagiário de Data Engineering",
      company: "Compass.UOL",
      period: "Mar 2025 – Ago 2025",
      location: "Remoto",
      type: "Estágio",
      description: "Projeto e manutenção de pipelines de dados escaláveis, trabalhando com Python, Spark, SQL e cloud AWS (Glue, S3, Athena).",
      achievements: [
        "Desenvolvimento e manutenção de pipelines de dados utilizando Python e SQL",
        "Construção de ambientes containerizados com Docker e Docker Compose para automação de fluxos de dados",
        "Limpeza, transformação e validação de conjuntos de dados estruturados e semiestruturados (.csv, .json)",
        "Criação de visualizações de dados e análises exploratórias para apoiar tomadas de decisão",
        "Trabalho atual com AWS para construção de soluções de dados em nuvem",
        "Aprendizado e aplicação de PySpark para processamento distribuído de grandes volumes de dados",
        "Exploração de modelagem relacional e dimensional para casos de uso em data warehouse",
        "Colaboração em ambiente ágil, seguindo melhores práticas de DevOps e engenharia de dados"
      ],
      technologies: ["Python", "SQL", "PySpark", "AWS (Glue, S3, Athena)", "Docker", "Docker Compose", "Jupyter"]
    },
    {
      title: "Autônomo / Freelancer",
      company: "Diversos",
      period: "Jan 2023 – Jan 2025",
      location: "Ponta Grossa - Paraná",
      type: "Part-time",
      description: "Atividades paralelas desenvolvendo habilidades de comunicação, gestão de projetos e desenvolvimento web.",  
      achievements: [
        "Motorista parceiro da Uber, com alto desempenho em atendimento ao cliente",
        "Gestão de vendas online, incluindo estoque, precificação e suporte ao cliente",
        "Desenvolvimento de aplicações web para pequenos negócios, usando Django e React",
        "Autogestão de prazos, priorização de tarefas e entrega de projetos"
      ],
      technologies: []
    },
    
  ];

  const education = [
    {
      degree: "Ciências de Dados",
      institution: "Universidade Unicesumar",
      period: "2024 - 2026",
      description: "Formação focada em big data, machine learning, arquitetura de sistemas e governança de dados.",
      highlights: []
    },
    {
      degree: "Curso Desenvolvimento Web Full Stack Python",
      institution: "EBAC - São Paulo",
      period: "2023 - 2024",
      description: "Base sólida em programação, banco de dados e desenvolvimento de sistemas.",
      highlights: ["Projeto Final: Plataforma de E-commerce - Divulgação de Restaurantes",]
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
  
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-secondary text-white border-0">
              💼 Experiência
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trajetória Profissional
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Minha jornada na engenharia de dados, desde os primeiros passos até projetos complexos em produção
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Column */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <Building className="mr-3 h-6 w-6 text-data-blue" />
                Experiência Profissional
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index}
                    className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-card"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                            <p className="text-data-blue font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="border-data-green text-data-green w-fit">
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h5 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Principais Conquistas:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start space-x-2">
                                <TrendingUp className="h-4 w-4 text-data-green mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="border-data-purple text-data-purple hover:bg-data-purple hover:text-background transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Education */}
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">🎓 Formação</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-data-blue text-sm">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.period}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                        <div className="space-y-1">
                          {edu.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-data-blue rounded-full" />
                              <span className="text-xs text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">🏆 Certificações</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-data-green rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;