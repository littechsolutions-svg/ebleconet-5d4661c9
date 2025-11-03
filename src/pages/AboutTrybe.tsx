import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutTrybe = () => {
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
            About the Trybe
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Here, we don't chase motivation.<br />
              We reprogram belief.<br />
              We don't fight our thoughts.<br />
              We rewire them to serve our truth.
            </p>

            <p>
              Each member of the Ebleco Trybe is a conscious creator — walking the fine line between science and spirit, dream and discipline. Through guided self-hypnosis, we learn to reshape subconscious patterns, heal emotional blockages, and awaken a new level of inner clarity.
            </p>

            <p>
              When you join the Trybe, you don't just listen to affirmations —<br />
              <span className="font-semibold text-primary">you become them.</span><br />
              You don't try to change your life —<br />
              <span className="font-semibold text-primary">you allow life to change through you.</span>
            </p>

            <p>
              We're explorers of the mind.<br />
              Believers in calm power.<br />
              Students of stillness.<br />
              Creators of new realities.
            </p>

            <p className="text-lg font-semibold text-foreground">
              Welcome to the Trybe —<br />
              where you remember that you were never broken,<br />
              only unprogrammed.
            </p>

            <section className="mt-12 space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">✦ Our Vision</h2>
                <p>
                  To awaken a new generation of creators who understand the power of their subconscious mind — and use it to design peace, purpose, and prosperity.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">✦ Our Philosophy</h2>
                <p>
                  Transformation doesn't require effort. It requires permission.<br />
                  At Ebleco Trybe, we give ourselves permission to rest, release, and rewire.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">✦ What We Do</h2>
                <ul className="space-y-2">
                  <li>• Guide members through self-hypnosis journeys designed for real mental rewiring</li>
                  <li>• Help you unlearn limiting patterns gently, in your sleep.</li>
                  <li>• Teach practical subconscious tools for calm focus, self-love, and mental mastery</li>
                  <li>• Build a global circle of conscious beings rewriting the meaning of inner peace</li>
                </ul>
              </div>
            </section>

            <p className="text-lg font-semibold text-center text-primary mt-12">
              ✨ You don't join Ebleco Trybe to escape your mind — you join to understand it.
            </p>
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

export default AboutTrybe;