export function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold">
              AI
            </h3>

            <p className="text-muted-foreground">
              Smart Question Generation
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              Voice
            </h3>

            <p className="text-muted-foreground">
              Speech-to-Text Answers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              Instant
            </h3>

            <p className="text-muted-foreground">
              Feedback & Evaluation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}