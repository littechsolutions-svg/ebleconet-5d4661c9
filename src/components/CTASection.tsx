import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient tracking-tight">
          Ready to join our trybe?
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Create your profile, connect with other conscious explorers, and start your 
          self-hypnosis journey with the Ebleco community.
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow-cyan hover:glow-magenta transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/ebleco-experience">
              Join the Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
