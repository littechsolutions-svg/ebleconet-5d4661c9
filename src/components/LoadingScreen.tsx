import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  duration?: number;
}

const LoadingScreen = ({ onLoadingComplete, duration = 5000 }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100; // Update every 100ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 glow-card">
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-red-500 rounded-sm animate-pulse glow-magenta" 
                 style={{ animationDelay: "0s" }} />
            <div className="w-6 h-6 bg-yellow-500 rounded-sm animate-pulse" 
                 style={{ animationDelay: "0.3s" }} />
            <div className="w-6 h-6 bg-green-500 rounded-sm animate-pulse glow-cyan" 
                 style={{ animationDelay: "0.6s" }} />
          </div>
        </div>
        
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;