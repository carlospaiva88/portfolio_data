import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageSquare,
  Download,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "seuemail@exemplo.com",
      href: "mailto:seuemail@exemplo.com",
      color: "text-data-blue"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999",
      color: "text-data-green"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#",
      color: "text-data-purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/seu-perfil",
      href: "https://linkedin.com/in/seu-perfil",
      color: "text-data-cyan"
    }
  ];

  const quickActions = [
    {
      icon: Download,
      title: "Download CV",
      description: "Baixe meu currículo completo em PDF",
      action: "Download",
      variant: "hero" as const,
      href: "#"
    },
    {
      icon: Calendar,
      title: "Agendar Conversa",
      description: "Vamos marcar uma reunião para conversar",
      action: "Agendar",
      variant: "outline_glow" as const,
      href: "#"
    },
    {
      icon: Github,
      title: "Ver Projetos",
      description: "Explore meus repositórios no GitHub",
      action: "GitHub",
      variant: "gradient" as const,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-accent text-white border-0">
              📞 Contato
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vamos Trabalhar Juntos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estou sempre aberto a novas oportunidades e desafios interessantes. 
              Entre em contato para discutirmos como posso contribuir com seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estou disponível para discutir oportunidades de trabalho, 
                  colaborações em projetos ou simplesmente trocar ideias sobre 
                  engenharia de dados e tecnologia.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index}
                    className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-card group cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        className="flex items-center space-x-3"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-primary`}>
                          <contact.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className={`font-medium ${contact.color} group-hover:text-data-blue transition-colors`}>
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Ações Rápidas
                </h4>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Card 
                      key={index}
                      className="bg-card/50 border-border hover:border-data-blue/50 transition-all duration-300 hover:shadow-card"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <action.icon className="h-5 w-5 text-data-blue" />
                            <div>
                              <p className="font-medium text-foreground">{action.title}</p>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                          </div>
                          <Button variant={action.variant} size="sm">
                            {action.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-data-blue" />
                  <span>Envie uma Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-data-blue focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-data-blue focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Sobre o que você gostaria de conversar?"
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-data-blue focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Conte-me mais sobre sua ideia, projeto ou oportunidade..."
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-data-blue focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <Button variant="hero" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Respondo geralmente em até 24 horas. Para assuntos urgentes, 
                  entre em contato diretamente via WhatsApp ou LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary border-0 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para Contribuir
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Estou disponível para projetos de engenharia de dados, consultoria técnica 
                  ou posições full-time. Vamos construir algo incrível juntos!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Reunião
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <Download className="mr-2 h-4 w-4" />
                    Download Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;