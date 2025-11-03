import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Onboarding = () => {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-8">
            Ebleco Trybe Onboarding Form
          </h1>

          <form action="https://formspree.io/f/mblanqjl" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required className="bg-background/50 border-border" />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required className="bg-background/50 border-border" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required className="bg-background/50 border-border" />
            </div>

            <div>
              <Label htmlFor="university">Select your University *</Label>
              <Select name="university" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose university" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border max-h-60">
                  <SelectItem value="university-of-lagos">University of Lagos</SelectItem>
                  <SelectItem value="university-of-ibadan">University of Ibadan</SelectItem>
                  <SelectItem value="obafemi-awolowo-university">Obafemi Awolowo University</SelectItem>
                  <SelectItem value="ahmadu-bello-university">Ahmadu Bello University</SelectItem>
                  <SelectItem value="university-of-nigeria">University of Nigeria, Nsukka</SelectItem>
                  <SelectItem value="covenant-university">Covenant University</SelectItem>
                  <SelectItem value="babcock-university">Babcock University</SelectItem>
                  <SelectItem value="lagos-state-university">Lagos State University</SelectItem>
                  <SelectItem value="university-of-benin">University of Benin</SelectItem>
                  <SelectItem value="nnamdi-azikiwe-university">Nnamdi Azikiwe University</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="course">Course of Study *</Label>
              <Select name="course" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose course" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border max-h-60">
                  <SelectItem value="medicine">Medicine and Surgery</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="accounting">Accounting</SelectItem>
                  <SelectItem value="business-administration">Business Administration</SelectItem>
                  <SelectItem value="psychology">Psychology</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                  <SelectItem value="mass-communication">Mass Communication</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  <SelectItem value="nursing">Nursing</SelectItem>
                  <SelectItem value="architecture">Architecture</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="gender">Select Gender *</Label>
              <Select name="gender" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose gender" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="occupation">Occupation/Current role *</Label>
              <Input id="occupation" name="occupation" required className="bg-background/50 border-border" />
            </div>

            <div>
              <Label htmlFor="country">Country of Residence *</Label>
              <Select name="country" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose country" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border max-h-60">
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="ghana">Ghana</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                  <SelectItem value="united-states">United States</SelectItem>
                  <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="state">State of Residence *</Label>
              <Select name="state" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose state" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border max-h-60">
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja (FCT)</SelectItem>
                  <SelectItem value="oyo">Oyo</SelectItem>
                  <SelectItem value="ogun">Ogun</SelectItem>
                  <SelectItem value="rivers">Rivers</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                  <SelectItem value="kaduna">Kaduna</SelectItem>
                  <SelectItem value="enugu">Enugu</SelectItem>
                  <SelectItem value="anambra">Anambra</SelectItem>
                  <SelectItem value="edo">Edo</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="learning-mode">Preferred Learning Mode *</Label>
              <Select name="learning-mode" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose mode" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="experience">Do you have prior experience with self-hypnosis? *</Label>
              <Select name="experience" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="somewhat">Somewhat</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="self-growth">What is your take on self growth and personal development? *</Label>
              <Textarea 
                id="self-growth" 
                name="self-growth" 
                placeholder="Share your thoughts..." 
                required 
                rows={4}
                className="bg-background/50 border-border resize-none"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Ebleco is purely a community of young minds that have a shared interest on creating a new level of mind with the tools within their reach.
              </p>
            </div>

            <div>
              <Label htmlFor="mission">What do you love about our Mission? *</Label>
              <Textarea 
                id="mission" 
                name="mission" 
                placeholder="Tell us what resonates with you..." 
                required 
                rows={4}
                className="bg-background/50 border-border resize-none"
              />
            </div>

            <div>
              <Label htmlFor="referral">How did you hear about Ebleco 25? *</Label>
              <Input id="referral" name="referral" required className="bg-background/50 border-border" />
            </div>

            <div>
              <Label htmlFor="contact-method">Preferred Contact Method *</Label>
              <Select name="contact-method" required>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose method" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg py-6"
            >
              Submit
            </Button>
          </form>
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

export default Onboarding;