import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutEbleco from "./pages/AboutEbleco";
import EblecoCommunity from "./pages/EblecoCommunity";
import MeetFounder from "./pages/MeetFounder";
import ContactSupport from "./pages/ContactSupport";
import Roadmap from "./pages/Roadmap";
import Terms from "./pages/Terms";
import AboutTrybe from "./pages/AboutTrybe";
import Onboarding from "./pages/Onboarding";
import EblecoExperience from "./pages/EblecoExperience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-ebleco" element={<AboutEbleco />} />
          <Route path="/ebleco-community" element={<EblecoCommunity />} />
          <Route path="/meet-founder" element={<MeetFounder />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about-trybe" element={<AboutTrybe />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/ebleco-experience" element={<EblecoExperience />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
