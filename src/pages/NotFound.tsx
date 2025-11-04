import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center bg-card border border-border rounded-3xl p-12 glow-card max-w-md mx-4">
        <h1 className="mb-4 text-6xl font-bold text-gradient animate-spiral-in">404</h1>
        <p className="mb-8 text-xl text-muted-foreground animate-spiral-in stagger-1">Oops! Page not found</p>
        <a href="/" className="inline-block">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan animate-spiral-in stagger-2">
            Return to Home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
