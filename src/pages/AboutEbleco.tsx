import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutEbleco = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 glow-card">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-8 animate-lightning-text">
            About Ebleco
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="animate-storm-reveal stagger-1">
              Ebleco is an emerging interdisciplinary theme that explores the dynamic relationship between the mind, body, and the molecular processes that shape human experience and behavior. The name Ebleco—derived from the Esperanto word for "connection" or "link"—reflects its central philosophy: that the mind and body are inseparably connected through cognitive pathways. Rooted in both epigenetics and self-hypnosis, Ebleco integrates modern scientific understanding with ancient principles of mental conditioning and consciousness exploration. It proposes that intentional mental states—such as focus, belief, and emotion—can influence biological functions, gene expression, and even long-term health outcomes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 animate-diagonal-unfold stagger-2">The Philosophy Behind Ebleco</h2>
            <p className="animate-scatter-in stagger-3">
              At its core, Ebleco emphasizes that the mind is not merely a by-product of the brain, but a causal agent capable of shaping biological processes. It suggests that every thought, emotion, and perception triggers measurable physiological responses—from hormone release to gene activation. This holistic view challenges the old Cartesian divide between mind and matter, inviting a new synthesis between psychology, neuroscience, and molecular biology.
            </p>
            <p className="animate-storm-reveal stagger-4">
              The philosophy also builds upon the principles of neuroplasticity—the brain's ability to rewire itself based on experience—and epigenetics, which reveals that genes are not static blueprints but responsive systems influenced by environmental and psychological factors. Ebleco proposes that conscious intent and repetitive mental focus can act as powerful "epigenetic switches," altering patterns of gene expression that govern health, mood, and resilience.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 animate-diagonal-unfold stagger-5">Scientific Foundations of Ebleco</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 animate-scatter-in stagger-6">Epigenetics:</h3>
            <p className="animate-storm-reveal stagger-6">
              Epigenetics studies how external or environmental factors can modify gene activity without altering the DNA sequence itself. Chemical tags—like DNA methylation or histone modification—can "turn on" or "turn off" genes. Ebleco aligns with this by proposing that mental and emotional environments can act as internal "epigenetic signals." For example, chronic stress may suppress genes associated with immunity, while positive emotions, meditation, and self-hypnosis may activate those promoting cellular repair and longevity.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 animate-diagonal-unfold stagger-7">Neuroplasticity:</h3>
            <p className="animate-scatter-in stagger-7">
              The brain's plastic nature allows it to reconfigure neural pathways in response to thought patterns, learning, and belief systems. Ebleco suggests that intentional thought repetition—through affirmations, visualization, or hypnotic conditioning—creates new neural circuits that reinforce desired behaviors or physiological responses.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 animate-storm-reveal stagger-8">Psychoneuroimmunology:</h3>
            <p className="animate-diagonal-unfold stagger-8">
              This emerging science studies the interaction between the nervous system, the immune system, and psychological states. Ebleco adopts this framework to explain how emotional balance, optimism, and inner calm can boost immune efficiency, reduce inflammation, and improve recovery.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 animate-scatter-in stagger-8">Self-Hypnosis and Autosuggestion:</h3>
            <p className="animate-storm-reveal stagger-8">
              Ebleco incorporates self-hypnosis as a tool for accessing the theta brainwave state, a frequency band (4–7 Hz) associated with deep relaxation and subconscious receptivity. In this state, individuals can reprogram limiting beliefs, reshape behavioral tendencies, and initiate psychosomatic healing. The subconscious mind, when engaged through self-hypnosis, communicates directly with the body's regulatory systems, facilitating harmony and homeostasis.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutEbleco;