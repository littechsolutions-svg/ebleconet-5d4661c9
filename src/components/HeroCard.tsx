import { useState } from "react";
import calmIcon from "@/assets/calm-icon.png";
import { Brain, Sparkles, Waves } from "lucide-react";

const HeroCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handleCardClick = () => {
    if (!showMessage) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMessage(true);
        setIsAnimating(false);
      }, 800);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="max-w-3xl mx-auto">
          <div 
            onClick={handleCardClick}
            className={`bg-card border border-border rounded-3xl p-8 sm:p-12 glow-card transition-all duration-500 hover:glow-violet cursor-pointer relative overflow-hidden ${
              isAnimating ? 'animate-thunder-crack' : ''
            }`}
          >
            {isAnimating && (
              <>
                <div className="absolute inset-0 bg-primary/20 animate-pulse pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-lightning" />
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-lightning-horizontal" />
              </>
            )}
            
            {!showMessage ? (
              <>
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
              </>
            ) : (
              <div className="animate-fade-in space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gradient animate-scale-in">
                  The Gateway to Transformation
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <p className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    If you don't know how to meditate, that's not a big deal...
                  </p>
                  <p className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
                    It's important to note that meditation is one of the doors to access the quantum field 🙌 however its not the only door 🙌
                  </p>
                  <p className="animate-slide-up font-semibold text-primary" style={{ animationDelay: "0.7s" }}>
                    There are other doors people can pass through to access the quantum field, or to rewrite subconscious programs and this door is called <span className="text-gradient">*self hypnosis.*</span>
                  </p>
                </div>
              </div>
            )}
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
