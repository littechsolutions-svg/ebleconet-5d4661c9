import { useState } from "react";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroCard />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
