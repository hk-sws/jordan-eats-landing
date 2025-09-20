import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          QuickDelivery
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm" className="shadow-primary">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;