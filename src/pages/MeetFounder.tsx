import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const MeetFounder = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-card border border-border rounded-3xl p-12 text-center glow-card">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-accent/10 glow-magenta">
              <AlertCircle className="h-16 w-16 text-accent" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            This page is currently under construction. The founder's story will be revealed soon.
          </p>
          
          <div className="bg-background/50 border border-primary/30 rounded-xl p-6 glow-cyan">
            <p className="text-primary text-lg font-medium">
              Redirecting to homepage in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetFounder;