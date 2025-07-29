import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "TechCorp Solutions",
      period: "Mar 2023 - Atual",
      location: "São Paulo, SP",
      type: "Full-time",
      description: "Responsável por projetar e implementar pipelines de dados escaláveis, otimizando o processamento de grandes volumes de dados e reduzindo custos operacionais em 40%.",
      achievements: [
        "Implementação de arquitetura de data lake que processa 5TB+ diários",
        "Migração de pipelines legados para Apache Spark, reduzindo tempo de processamento em 60%",
        "Liderança técnica em projeto de real-time analytics com Kafka e Spark Streaming",
        "Desenvolvimento de framework interno de qualidade de dados"
      ],
      technologies: ["Python", "Apache Spark", "Kafka", "AWS", "Airflow", "SQL"]
    },
    {
      title: "Estagiário Data Engineer",
      company: "DataFlow Enterprises",
      period: "Jan 2022 - Fev 2023",
      location: "São Paulo, SP",
      type: "Estágio",
      description: "Desenvolvimento de ETL pipelines e automação de processos de dados, contribuindo para projetos de modernização da infraestrutura de dados da empresa.",
      achievements: [
        "Criação de 15+ pipelines ETL automatizados usando Python e SQL",
        "Implementação de monitoramento e alertas para pipelines críticos",
        "Contribuição para migração de dados on-premise para cloud (AWS)",
        "Documentação técnica e treinamento da equipe em novas ferramentas"
      ],
      technologies: ["Python", "SQL", "AWS S3", "PostgreSQL", "Docker", "Git"]
    },
    {
      title: "Analista de Dados Jr.",
      company: "Analytics Hub",
      period: "Jun 2021 - Dez 2021",
      location: "São Paulo, SP",
      type: "Part-time",
      description: "Análise de dados de negócio e criação de dashboards interativos, fornecendo insights estratégicos para diferentes áreas da empresa.",
      achievements: [
        "Desenvolvimento de 20+ dashboards em Power BI e Tableau",
        "Automação de relatórios mensais, economizando 40h/mês da equipe",
        "Análise de dados de vendas resultando em aumento de 15% na conversão",
        "Implementação de pipeline de dados para análise de comportamento de usuários"
      ],
      technologies: ["Power BI", "SQL", "Python", "Excel", "Tableau"]
    }
  ];

  const education = [
    {
      degree: "Bacharelado em Engenharia de Dados",
      institution: "Universidade Tecnológica de São Paulo",
      period: "2020 - 2024",
      description: "Formação focada em big data, machine learning, arquitetura de sistemas e governança de dados.",
      highlights: ["TCC: Otimização de Pipelines de ML em Produção", "Bolsista de Iniciação Científica"]
    },
    {
      degree: "Curso Técnico em Informática",
      institution: "ETEC São Paulo",
      period: "2018 - 2019",
      description: "Base sólida em programação, banco de dados e desenvolvimento de sistemas.",
      highlights: ["Projeto Final: Sistema de Gestão Escolar", "Menção Honrosa em Programação"]
    }
  ];

  const certifications = [
    "AWS Certified Data Engineer - Associate",
    "Google Cloud Professional Data Engineer",
    "Apache Spark Certified Developer",
    "Databricks Certified Associate Developer"
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