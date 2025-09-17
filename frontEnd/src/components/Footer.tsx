import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DataPortfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Engenheiro de dados especializado em criar soluções escaláveis e 
                transformar dados em valor para o negócio. Sempre em busca de 
                novos desafios e oportunidades de crescimento.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-data-blue transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-data-blue transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-data-blue transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Navegação</h4>
              <ul className="space-y-2">
                {[
                  { name: "Início", href: "#home" },
                  { name: "Sobre", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projetos", href: "#projects" },
                  { name: "Experiência", href: "#experience" },
                  { name: "Contato", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-data-blue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>São Paulo, SP - Brasil</p>
                <p>+55 (11) 99999-9999</p>
                <p>seuemail@exemplo.com</p>
              </div>
              <Button variant="hero" size="sm" className="w-full">
                Vamos Conversar
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 [Seu Nome]. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4">
             
              <Button 
                variant="ghost" 
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;