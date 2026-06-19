
export function HowItWorks() {
  
  const steps = [
    {
      title: "Choose Your Path",
      description:
        "Use your LeetCode profile for personalized practice or select a DSA topic manually.",
    },
    {
      title: "Create Your Interview",
      description:
        "Choose the difficulty level and number of questions for your mock interview.",
    },
    {
      title: "Practice with AI",
      description:
        "Answer AI-generated DSA interview questions using text or voice responses.",
    },
    {
      title: "Get Feedback",
      description:
        "Receive detailed feedback and insights to improve your interview performance.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Practice technical interviews with AI, get personalized feedback,
            and build confidence for coding interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="
                rounded-2xl
                border
                bg-background
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div
                className="
                  w-14 h-14
                  mx-auto mb-6
                  rounded-full
                  border
                  flex items-center justify-center
                  text-xl font-bold
                "
              >
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}