
export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <span className="border rounded-full px-4 py-2 text-sm">
            About The Project
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Why I Built AI DSA Interview Simulator
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            A platform designed to help students practice technical
            interviews through personalized DSA questions,
            voice-based responses, and AI-powered evaluation.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            The Problem
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">

            <p>
              While preparing for technical interviews, I spent hours
              solving LeetCode problems and studying Data Structures
              and Algorithms. However, I noticed that most platforms
              focused only on coding problems and not on the
              theoretical interview questions that recruiters often ask.
            </p>

            <p>
              I wanted a way to practice concepts such as time
              complexity, algorithm selection, trade-offs, data
              structures, and problem-solving approaches in an
              interview setting.
            </p>

            <p>
              After exploring multiple interview preparation websites,
              I realized there was no simple platform that could
              generate personalized DSA interview questions while also
              providing detailed feedback on my answers.
            </p>

            <p>
              That's when I decided to build AI DSA Interview Simulator.
            </p>

          </div>

        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 bg-muted/30">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes It Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-6 bg-background">
              <h3 className="font-semibold text-xl mb-3">
                Personalized Practice
              </h3>

              <p className="text-muted-foreground">
                Users can either analyze their LeetCode profile or
                directly choose a DSA topic to generate customized
                interview questions.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-background">
              <h3 className="font-semibold text-xl mb-3">
                AI Evaluation
              </h3>

              <p className="text-muted-foreground">
                Every answer is evaluated using AI, providing detailed
                feedback, scores, strengths, weaknesses, and
                improvement suggestions.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-background">
              <h3 className="font-semibold text-xl mb-3">
                Voice Responses
              </h3>

              <p className="text-muted-foreground">
                To make interview practice more realistic and
                accessible, users can answer questions using voice
                instead of typing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* About Me */}
      <section className="py-16 px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            About the Developer
          </h2>

          <div className="border rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Gitika Chahar
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm a pre-final year Computer Science student
              specializing in Data Science at NSUT, Delhi.
              I'm passionate about Data Structures &
              Algorithms, Full Stack Development, and building
              AI-powered products that solve real problems.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              My interests include MERN Stack Development,
              System Design fundamentals, AI integrations,
              and creating tools that help students prepare
              for placements more effectively.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Through this project, I wanted to combine my
              enthusiasm for DSA with modern AI technologies
              to create a practical interview preparation
              platform that students can genuinely benefit from.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 px-6">

        <div className="max-w-4xl mx-auto text-center border rounded-3xl p-12">

          <h2 className="text-4xl font-bold">
            Ready to Practice?
          </h2>

          <p className="mt-4 text-muted-foreground">
            Start your personalized AI-powered DSA interview
            and improve your technical communication skills.
          </p>
          < a href="/signup">
          <button className="mt-8 px-8 py-3 rounded-lg border font-medium">
            Start Interview
          </button>
</a>
        </div>

      </section>

    </main>
  );
}

