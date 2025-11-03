import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ebleco-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Ebleco Trybe Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-semibold tracking-tight">
              Ebleco <span className="text-primary">Trybe</span>
            </h1>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary glow-cyan transition-all duration-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border glow-cyan">
              <DropdownMenuItem asChild>
                <Link to="/onboarding" className="cursor-pointer">Join the Trybe</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about-ebleco" className="cursor-pointer">About Ebleco</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/ebleco-community" className="cursor-pointer">Ebleco Community</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/meet-founder" className="cursor-pointer">Meet Ebleco's Founder</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
