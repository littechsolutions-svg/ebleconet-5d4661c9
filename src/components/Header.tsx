import { Button } from "@/components/ui/button";
import logo from "@/assets/ebleco-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Ebleco Trybe Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-semibold tracking-tight">
              Ebleco <span className="text-primary">Trybe</span>
            </h1>
          </div>
          
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary glow-cyan transition-all duration-300"
          >
            My Account
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
