import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
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
