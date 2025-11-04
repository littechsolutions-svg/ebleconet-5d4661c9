import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const EblecoCommunity = () => {
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
            The Community: Ebleco at its Core
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="animate-diagonal-unfold stagger-1">
              Ebleco represents a frontier of integrative science—a bridge between the impossible and a new reality created by belief. Future research aims to quantify how specific thought patterns alter epigenetic markers, to develop protocols that combine self-hypnosis with neurofeedback, and to establish standardized therapeutic frameworks. As understanding deepens, Ebleco may become a cornerstone of conscious medicine, where healing begins not in the pill or the procedure, but in the perception and belief of the individual.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 animate-storm-reveal stagger-2">Conclusion</h2>
            <p className="animate-scatter-in stagger-3">
              Ebleco invites a paradigm shift—from viewing the body as a mechanical system to seeing it as a living expression of consciousness. It teaches that through mental discipline, auto suggestions and self-directed neuroplasticity, we can influence our genetic destiny and reshape the quality of our lives. Bridging epigenetics, psychology, and self-hypnosis, Ebleco offers not just a science of healing, but a philosophy of human evolution—one in which thought itself becomes medicine.
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

export default EblecoCommunity;