import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: Jul 20, 2025</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Welcome to Ebleco. These Terms and Conditions ("Terms") govern your access to and use of our website, programs, products, and services (collectively, the "Services"). By accessing or using Ebleco, you agree to these Terms. Please read them carefully before participating in any of our programs or accessing our materials.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By using Ebleco's Services, you agree to be bound by these Terms, our Privacy Policy, and any additional guidelines or rules that may apply to specific programs or offerings.
              </p>
              <p className="mt-2">
                If you do not agree with these Terms, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Purpose of Ebleco</h2>
              <p>
                Ebleco provides educational and self-development content designed to help individuals explore self-hypnosis, mindset growth, and emotional transformation.
              </p>
              <p className="mt-2">
                Our Services are for personal development purposes only and should not be considered medical, psychological, or therapeutic advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Eligibility</h2>
              <p>You must be at least 18 years old to access our programs.</p>
              <p className="mt-2">
                If you are under 18, you may only participate under the supervision and consent of a parent or guardian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. User Responsibilities</h2>
              <p>When using Ebleco, you agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Use the Services for lawful purposes only.</li>
                <li>Provide accurate, current, and complete information when signing up.</li>
                <li>Not share, sell, or redistribute Ebleco's content without written permission.</li>
                <li>Respect the intellectual property rights of Ebleco and its creators.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Intellectual Property</h2>
              <p>
                All content on Ebleco — including text, audio sessions, videos, images, logos, and materials — is owned by or licensed to Ebleco Trybe.
              </p>
              <p className="mt-2">
                You may not copy, modify, reproduce, or distribute any of our materials without prior written consent.
              </p>
            </section>
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

export default Terms;