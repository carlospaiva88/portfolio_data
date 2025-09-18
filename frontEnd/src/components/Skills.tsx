import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Database, 
  Cloud, 
  Code, 
  Cpu, 
  Settings, 
  BarChart3,
  Server,
  GitBranch 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      color: "text-data-blue",
      skills: [
        { name: "Python", level: 65, frameworks: ["Pandas", "NumPy", "PySpark"] },
        { name: "SQL", level: 73, frameworks: ["PostgreSQL", "MySQL", "Dbeaver"] },
        { name: "JavaScript", level: 50, frameworks: ["React", "Vite"] },
      ]
    },
    
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "text-data-green",
      skills: [
        { name: "AWS", level: 75, frameworks: ["S3", "Glue", "QuickSight", "Lambda"] },
        { name: "Google Cloud", level: 40, frameworks: ["BigQuery", "Dataflow", "Pub/Sub"] },
        { name: "Azure", level: 20, frameworks: ["Data Factory", "Databricks"] },
      ]
    },
    {
      title: "Databases & Warehouses",
      icon: Database,
      color: "text-data-cyan",
      skills: [
        { name: "Data Warehousing", level: 60, frameworks: ["Snowflake", "Redshift"] },
        { name: "NoSQL", level: 55, frameworks: ["MongoDB", "Cassandra", "DynamoDB"] },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "text-data-purple",
      skills: [
        { name: "Docker", level: 65, frameworks: ["Kubernetes", "Docker Compose"] },
        { name: "Git", level: 90, frameworks: ["GitHub", "GitLab"] },
        { name: "CI/CD", level: 58, frameworks: ["GitHub Actions"] },
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-data-green",
      skills: [
        { name: "Tableau", level: 45, frameworks: ["Dashboards", "Stories"] },
        { name: "Power BI", level: 60, frameworks: ["Reports", "DAX"] },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Stack Tecnológico
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções robustas de engenharia de dados
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-card group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-primary`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold ${category.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div className="flex flex-wrap gap-1">
                        {skill.frameworks.map((framework, fIndex) => (
                          <Badge 
                            key={fIndex}
                            variant="outline"
                            className="text-xs border-muted text-muted-foreground hover:border-data-blue hover:text-data-blue transition-colors"
                          >
                            {framework}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Outras Competências
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Modeling", "ETL/ELT Design", "Data Quality", 
                "Data Governance", "API Development",
                "Back End", 
                "Data Architecture", "Agile/Scrum"
              ].map((skill) => (
                <Badge 
                  key={skill}
                  variant="outline"
                  className="border-data-purple text-data-purple hover:bg-data-purple hover:text-background transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;