import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Volume2, VolumeX, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

const VALID_PASSKEYS = [
  "EBC-91X-HYP-47",
  "EBC-23M-THETA-09",
  "EBC-77Q-MIND-55",
  "EBC-14V-DEEP-88",
  "EBC-60T-STATE-33",
  "EBC-42Z-REALIGN-72",
];

const VIDEO_IDS = [
  "aMC6l8x6HI8", // Dr. Bruce Lipton on the Subconscious Mind
  "QJ04KyA4hP4",
  "yvjRa_o_l8E",
  "ga4d4ep0_cU",
  "I9Chnd_4daA",
  "NGbn-9eU7vg",
  "BP-mfTNBkaU",
  "v7KQsS2kLM4",
  "lAnWhIl2qY8",
  "sKqvFEQ-bAk",
];

const COMMUNITY_NOTE = `Ebleco Community Study Note: Understanding the Subconscious Path

There is something most people never realize about the way change happens.

They believe that transformation begins by collecting knowledge — reading more books, watching more talks, filling their minds with concepts and quotes.

But knowledge alone does not change behavior.

Knowledge inspires.
Only experience transforms.

When we learn intellectually, we are operating in the conscious mind, which represents only about 5% of our mental activity.

It is the part of us that analyzes, thinks, plans, doubts, questions, and evaluates.

But our habits, emotional reactions, belief patterns, and identity — these live in the subconscious mind, which controls the remaining 95% of our life.

This means: We do not live by what we know. We live by what we have become.

And the subconscious mind is shaped not by logic, but by impression, emotion, and repetition.

The Role of Brainwave States

When we are awake and thinking, we are in the Beta brainwave state.

Beta is useful for navigating daily life — but it is the state where we are the least suggestible.

In Beta:
We are self-conscious.
We are analytical.
We are defensive.
We are doubtful.

This is why affirmations "don't work" while we are fully awake.

The conscious mind argues with them.

To truly accept a new belief, we must reach a different brain state: Theta.

Theta is the brainwave state of:
Early childhood (before age 7)
Deep meditation
Hypnosis
The moments just before sleep
The moments just after waking

In Theta, the conscious mind is quiet.
The subconscious mind is open.

This is where change is possible.

Why Self-Hypnosis Is the Door

Self-hypnosis is not about control or manipulation.

It is the act of gently guiding the mind into Theta — where the subconscious becomes receptive and soft.

When you are in Theta: You are no longer forcing change.
You are allowing change to happen.

The thinking mind steps aside.
The emotional mind opens.
New suggestions are accepted as reality.

This is why in Ebleco:

We do not force affirmations.
We do not repeat them consciously.
We do not argue with the mind.

We bypass the mind.

We allow the subconscious to be reached directly, through:
Relaxation
Calm breathing
Soft attention
And recorded affirmations played during the transition to sleep

This is where the door opens.

From Information → Transformation

There is a difference between knowing something and embodying something.

Knowing is mental.
Becoming is neural.

Transformation is complete when the new belief no longer needs effort — it simply lives inside you.

This is the goal of Ebleco: A shift from: "I am trying to change" to "I am the change now."

This is why our nightly self-hypnosis ritual matters. It allows the subconscious to be rewritten gently, consistently, and without force.

Not through pressure — but through receptivity.

Over time, the subconscious forms new emotional patterns.
Then behavior shifts automatically.
Then identity evolves.

This is not motivation. This is reprogramming.`;

const EblecoExperience = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Array<{ id: string; text: string; timestamp: string }>>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    // Check if already unlocked
    const accessGranted = localStorage.getItem("ebleco_access_granted");
    if (accessGranted === "true") {
      setIsUnlocked(true);
    }

    // Load personal chat messages
    const savedMessages = localStorage.getItem("ebleco_personal_chats");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Failed to parse messages:", error);
      }
    }
  }, []);

  const handlePasskeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (VALID_PASSKEYS.includes(passkey.trim())) {
      localStorage.setItem("ebleco_access_granted", "true");
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Access Denied. Please contact your Ebleco mentor for verification.");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: currentMessage.trim(),
        timestamp: new Date().toLocaleString(),
      };
      
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem("ebleco_personal_chats", JSON.stringify(updatedMessages));
      setCurrentMessage("");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <BackgroundMusic />
        <div className="max-w-md w-full">
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 glow-card text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-6 rounded-full">
                <Lock className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Enter Your Ebleco Access Key
            </h1>
            
            <form onSubmit={handlePasskeySubmit} className="space-y-4 mt-8">
              <Input
                type="text"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter passkey..."
                className="bg-background/50 border-border text-center text-lg"
              />
              
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              >
                Unlock Access
              </Button>
            </form>
            
            <Link to="/" className="block mt-6">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BackgroundMusic />
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Video Lessons Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 animate-electric-flash">
            Ebleco Video Lessons
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {VIDEO_IDS.map((videoId, index) => (
              <div key={videoId} className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl glow-card">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Ebleco Lesson ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">Lesson {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Notes Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Community Study Notes
          </h2>
          
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-12 glow-card">
            <div className="prose prose-invert max-w-none">
              <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {COMMUNITY_NOTE}
              </p>
            </div>
          </div>
        </section>

        {/* Personal Chat Room Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            My Notepad
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            🔒 All your reflections are saved in your personal chat room and can only be viewed with your access key
          </p>
          
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden glow-card">
            {/* Chat Messages Display */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-background/30">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground text-center">
                    No reflections yet. Start by typing your thoughts below...
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className="flex justify-end">
                    <div className="max-w-[80%] bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-foreground whitespace-pre-wrap break-words">{message.text}</p>
                      <p className="text-xs text-muted-foreground mt-1 text-right">{message.timestamp}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-card">
              <div className="flex gap-2 items-end">
                <Textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your reflection..."
                  rows={1}
                  className="flex-1 bg-background/50 border-border resize-none text-foreground text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EblecoExperience;
