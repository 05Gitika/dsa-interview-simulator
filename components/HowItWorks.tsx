export function HowItWorks() {
  const steps = [
    "Choose a DSA Topic",
    "Answer Questions",
    "Get AI Feedback",
    "Improve Performance",
  ];

  return (
    <section className="py-20 bg-muted/40">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map(
            (step, index) => (
              <div
                key={step}
                className="rounded-lg border p-6 text-center"
              >
                <div className="text-3xl font-bold mb-4">
                  {index + 1}
                </div>

                <p>{step}</p>
              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
}