import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup = ({ message, onClose }: SuccessPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 50);

    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4">
      <div
        className={`bg-card border-2 border-primary/50 rounded-2xl p-6 shadow-2xl glow-card max-w-md w-full transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="relative">
              <CheckCircle2 className="h-8 w-8 text-primary animate-bounce" />
              <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gradient mb-1">Success!</h3>
            <p className="text-muted-foreground">{message}</p>
          </div>
        </div>
        <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-[shimmer_5s_ease-in-out]" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
