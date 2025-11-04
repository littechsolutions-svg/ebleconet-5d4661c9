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
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const onboardingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  university: z.string().min(1, "Please select a university"),
  course: z.string().min(1, "Please select a course"),
  gender: z.string().min(1, "Please select gender"),
  occupation: z.string().trim().min(1, "Occupation is required").max(200),
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please select a state"),
  learningMode: z.string().min(1, "Please select learning mode"),
  experience: z.string().min(1, "Please select your experience level"),
  selfGrowth: z.string().trim().min(10, "Please share at least 10 characters").max(2000),
  mission: z.string().trim().min(10, "Please share at least 10 characters").max(2000),
  referral: z.string().trim().min(1, "Please tell us how you heard about us").max(200),
  contactMethod: z.string().min(1, "Please select a contact method"),
});

const Onboarding = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      university: formData.get("university") as string,
      course: formData.get("course") as string,
      gender: formData.get("gender") as string,
      occupation: formData.get("occupation") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
      learningMode: formData.get("learning-mode") as string,
      experience: formData.get("experience") as string,
      selfGrowth: formData.get("self-growth") as string,
      mission: formData.get("mission") as string,
      referral: formData.get("referral") as string,
      contactMethod: formData.get("contact-method") as string,
    };

    try {
      const validatedData = onboardingSchema.parse(data);
      
      const response = await fetch("https://formspree.io/f/mblanqjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        toast({
          title: "Successfully submitted!",
          description: "Thank you for joining the Ebleco Trybe. We'll be in touch soon.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Invalid information",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission failed",
          description: "Please check your information and try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-8 animate-electric-flash">
            Ebleco Trybe Onboarding Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 animate-electric-flash stagger-1">
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
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
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