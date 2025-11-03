import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSupport = () => {
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
            Contact Support
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Need help, have a question, or just want to connect? Reach out to us through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="https://instagram.com/itsintellect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/50 border border-border rounded-2xl p-6 text-center hover:border-primary transition-all duration-300 glow-cyan group"
            >
              <Instagram className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground">@itsintellect</p>
            </a>

            <a 
              href="https://twitter.com/intellectski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/50 border border-border rounded-2xl p-6 text-center hover:border-primary transition-all duration-300 glow-cyan group"
            >
              <Twitter className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">X (Twitter)</h3>
              <p className="text-muted-foreground">@intellectski</p>
            </a>

            <a 
              href="https://wa.me/2348085703325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/50 border border-border rounded-2xl p-6 text-center hover:border-primary transition-all duration-300 glow-cyan group"
            >
              <Phone className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Phone / WhatsApp</h3>
              <p className="text-muted-foreground">0808 570 3325</p>
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form action="https://formspree.io/f/mblanqjl" method="POST" className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  required 
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              >
                Send Message
              </Button>
            </form>
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

export default ContactSupport;