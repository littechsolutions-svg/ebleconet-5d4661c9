import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
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
            From Information to Transformation: Accessing the Subconscious Through Theta
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. The Illusion of Change Through Knowledge</h2>
              <p>
                Most people begin their personal-growth journey with books, podcasts, and courses. They highlight passages, quote famous teachers, and accumulate insights. Yet weeks later, their behaviors remain unchanged.
              </p>
              <p className="mt-4">
                This isn't a failure of willpower or intelligence — it's a mismatch of levels. Reading operates in the conscious mind, where logic and language live. But our habits, fears, and emotional reflexes come from a deeper layer — the subconscious mind.
              </p>
              <p className="mt-4 italic font-medium text-primary">
                Until information sinks below the surface, it can inspire us intellectually but cannot recode us neurologically.
              </p>
              <p className="mt-4 italic">
                People have to even know this, reading all types of books, self help or not doesn't touch your subconscious brain, it goes straight to your conscious mind.
              </p>
            </section>

            <section>
              <p>
                When we are awake and reading, the brain is in beta. When we enter self-hypnosis, it drifts toward theta. Theta is the state where the critical filter of the mind relaxes, and new ideas can be felt and accepted as reality.
              </p>
              <p className="mt-4">
                In theta, the default mode of the brain, the chaos, the chatter is suppressed, scientifically speaking, we can say the thinking brain is quiet.
              </p>
              <p className="mt-4 font-semibold text-foreground">
                What's the implication when the thinking brain is quiet?
              </p>
              <p className="mt-4">
                Well, if the thinking brain is quiet, it means you're very suggestible to any new ideas coming in...
              </p>
              <p className="mt-4">
                In beta, attention is scattered and emotions are mild. In theta, the body is calm, the mind is focused, and emotion is vivid.
              </p>
              <p className="mt-4">
                And most of the times the self help books we read, we are usually in beta and in beta pattern, no subconscious programming can take place. That's why self-hypnosis, and deep meditation become fertile ground for genuine rewiring — they activate both attention and feeling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Revisiting the Early Programming Window</h2>
              <p>
                Between birth and roughly age seven, children's brains naturally operate in theta. They absorb beliefs, behaviors, and emotional patterns directly from their environment without analysis. Those early impressions form the "operating system" we still run as adults. Self-hypnosis recreates that same neuroplastic openness — allowing us to return to the code level and consciously install new programs.
              </p>
              <p className="mt-4">
                Let's just say our brains are a set of codes or a set of programs that run automatically without any bit of our awareness. And to what volume does these programs run?
              </p>
              <p className="mt-4">
                Well, there's enough neuroscience that shows that 95 percent of our everyday lives depends solely on the subconscious while the other 5 percent depends on our conscious mind.
              </p>
              <p className="mt-4">
                Affirmation in trance – repeat key phrases only after entering deep calm; the subconscious receives them without resistance.
              </p>
            </section>

            <section>
              <p>In Ebleco, we don't do our affirmations standing before a mirror.</p>
              <p className="mt-2">In Ebleco, we don't do our affirmations while reading a favorite quote or a self help book.</p>
              <p className="mt-2">We don't do it while eating chocolate in a supermarket?</p>
              <p className="mt-4 font-semibold text-foreground">Where and how do we do our affirmations?</p>
              <p className="mt-4">
                We simply wait for our consciousness to be disconnected and we put our affirmations on a <span className="font-semibold text-primary">constant replay</span> while listening to them. In this state, we are on the <span className="font-semibold text-primary">route of falling asleep,</span> so we don't hear these affirmations when they are even playing.
              </p>
              <p className="mt-4 font-semibold text-primary">However they are playing</p>
              <p className="mt-4">
                But they aren't syncing with our <span className="font-semibold">conscious</span> mind because as we are <span className="font-semibold">falling asleep,</span> our conscious minds are disconnecting readily, now once that happens, our <span className="font-semibold">subconscious</span> minds open up and accept that new <span className="font-semibold">information</span>
              </p>
              <p className="mt-4">
                Yet, its this simple ritual that actually creates the <span className="font-semibold text-primary">miraculous</span>.
              </p>
            </section>

            <section>
              <p>
                Evening integration – practice just before sleep, when the brain naturally drifts through theta. Over time, these rituals shift knowledge into identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. The Shift From Knowing to Being</h2>
              <p>
                Transformation is complete when an idea moves from mental concept to automatic response. That moment — when calm confidence or compassion arises spontaneously — signals that a new neural network has formed. You no longer think the change; you are the change.
              </p>
              <p className="mt-4">
                This is the essence of self-hypnosis and the goal of EBLECO's experiential learning: to make wisdom a lived state, not an abstract sentence in a book.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Closing Insight</h2>
              <p>Reading awakens curiosity.</p>
              <p className="mt-2">Practice awakens circuitry.</p>
              <p className="mt-2">Words open the door, but only experience walks you through it.</p>
              <p className="mt-4">
                When you engage theta-based practices, (self hypnosis), you invite your subconscious to participate in your evolution — and that's where real, lasting transformation begins.
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

export default Roadmap;