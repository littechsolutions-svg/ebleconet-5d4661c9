import calmIcon from "@/assets/calm-icon.png";

const HeroCard = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 glow-card transition-all duration-500 hover:glow-violet">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={calmIcon} 
                alt="Calm Mind Icon" 
                className="h-20 w-20 object-contain animate-pulse"
              />
              <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 tracking-tight">
            Cross-Mind Collaboration
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            Connect explorers of the mind, self-hypnosis practitioners, and awareness seekers 
            to deepen understanding and share transformative experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
