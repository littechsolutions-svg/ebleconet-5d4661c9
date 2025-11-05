import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import VideoEmbed from "@/components/VideoEmbed";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDuration, setLoadingDuration] = useState(13000);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedEblecoTrybe');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    localStorage.setItem('hasVisitedEblecoTrybe', 'true');
    setIsLoading(false);
  };

  const handleMenuClick = () => {
    setLoadingDuration(3000);
    setIsLoading(true);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} duration={loadingDuration} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={handleMenuClick} />
      
      <main className="pt-16">
        <HeroCard />
        <VideoEmbed />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
