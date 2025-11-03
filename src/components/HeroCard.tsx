import calmIcon from "@/assets/calm-icon.png";
import { Brain, Sparkles, Waves } from "lucide-react";

const HeroCard = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Rewiring",
      description: "Self-hypnosis activates theta brainwaves, the frequency where deep subconscious reprogramming occurs naturally."
    },
    {
      icon: Sparkles,
      title: "Epigenetic Influence",
      description: "Intentional mental states can trigger biological changes, influencing gene expression and long-term health outcomes."
    },
    {
      icon: Waves,
      title: "Consciousness Gateway",
      description: "Access the subconscious mind where 95% of your behaviors, beliefs, and automatic responses are stored."
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 glow-card hover:glow-magenta transition-all duration-500 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gradient">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
