import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Database, TrendingUp, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Database, value: "500GB+", label: "Dados Processados", color: "text-data-blue" },
    { icon: TrendingUp, value: "40%", label: "Melhoria Performance", color: "text-data-green" },
    { icon: Users, value: "10+", label: "Projetos Entregues", color: "text-data-purple" },
    { icon: Award, value: "3", label: "Certificações", color: "text-data-cyan" },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-secondary text-white border-0">
              💫 Sobre Mim
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transformando Dados em Valor
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sou um engenheiro de dados apaixonado por criar soluções que transformam 
              dados complexos em insights acionáveis para o negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-foreground max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Com experiência sólida em <strong className="text-data-blue">engenharia de dados</strong>, 
                  especializo-me em projetar e implementar pipelines de dados robustos, 
                  arquiteturas escaláveis e soluções de processamento em tempo real.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Minha abordagem combina <strong className="text-data-purple">tecnologias modernas</strong> 
                  como Apache Spark, Apache Airflow e cloud computing (AWS/GCP) para 
                  criar sistemas que processam grandes volumes de dados com eficiência 
                  e confiabilidade.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Busco constantemente <strong className="text-data-green">otimizar processos</strong>, 
                  reduzir custos operacionais e implementar as melhores práticas de 
                  governança de dados e qualidade.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Principais Competências:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Pipeline Development",
                    "Data Warehousing", 
                    "ETL/ELT Processes",
                    "Real-time Processing",
                    "Cloud Architecture",
                    "Data Quality",
                    "Performance Optimization",
                    "Team Collaboration"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-card group"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;