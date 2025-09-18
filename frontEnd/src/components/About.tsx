import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Database, TrendingUp, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Database, value: "500GB+", label: "Dados Processados", color: "text-data-blue" },
    { icon: TrendingUp, value: "40%", label: "Melhoria Performance", color: "text-data-green" },
    { icon: Users, value: "10+", label: "Projetos Entregues", color: "text-data-purple" },
    { icon: Award, value: "1", label: "Certificações", color: "text-data-cyan" },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">

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
                  Tenho <strong className="text-data-blue">experiência sólida em engenharia de dados</strong>, com atuação em projetos reais de construção e manutenção de pipelines escaláveis, arquiteturas em nuvem e processamento de grandes volumes de dados, utilizando em meu cotidiano tecnologias como <strong className="text-data-blue">Python</strong>, <strong className="text-data-blue">React</strong> e <strong className="text-data-blue">AWS (S3, Glue, Athena)</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Atualmente, estou focado também em iniciativas autônomas de <strong className="text-data-blue">desenvolvimento e gestão de blogs em múltiplos nichos</strong>, aplicando estratégias de <strong className="text-data-blue">SEO</strong> e <strong className="text-data-blue">marketing de afiliados</strong> para monetização e crescimento orgânico, o que me permitiu desenvolver habilidades em marketing digital, análise de métricas e suporte ao público.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Minha abordagem profissional alia o <strong className="text-data-blue">domínio técnico avançado</strong> ao gerenciamento eficiente de projetos, com constante busca por otimização de processos e implementação das melhores práticas de governança e qualidade de dados.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Integro com facilidade em <strong className="text-data-blue">ambientes ágeis</strong> e colaborativos, e adoto práticas de <strong className="text-data-blue">DevOps</strong> para automatização e entrega contínua de valor.
                </p>

              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Principais Competências:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Desenvolvimento de Pipelines",
                    "Data Warehousing", 
                    "ETL/ELT",
                    "Desenvolvimento Web",
                    "Cloud Architecture",
                    "Qualidade de Dados",
                    "Otimização de Performance",
                    "Trabalho em Equipe"
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