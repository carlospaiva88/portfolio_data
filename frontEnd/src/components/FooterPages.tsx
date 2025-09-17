import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const FooterPages = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 JadeLabs Todos os direitos reservados.
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

export default FooterPages;