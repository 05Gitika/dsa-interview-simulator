import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductPreview() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <Card className="
  shadow-2xl
  border
  rounded-3xl
  transition-all
  duration-300
  hover:shadow-3xl
">

          <CardHeader>
            <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium mb-3">
              AI Powered Interview
            </div>

            <CardTitle className="text-2xl">
              Live Interview Preview
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            <div>
              <p className="text-sm text-muted-foreground">
                Question 1 of 5
              </p>

              <h3 className="font-semibold text-2xl mt-2 leading-relaxed">
                Explain the difference between
                Merge Sort and Quick Sort.
              </h3>
            </div>

            <div className="border rounded-xl p-5 bg-muted/20">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Candidate Answer
              </p>

              <p className="text-muted-foreground">
                Merge Sort uses divide and conquer
                and guarantees O(n log n) time,
                while Quick Sort performs better
                on average but can degrade to
                O(n²) in the worst case.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="
  border
  rounded-xl
  p-4
  transition-all
  duration-300
  hover:shadow-lg
  hover:-translate-y-1
">
                <p className="text-sm text-muted-foreground">
                  Score
                </p>

                <p className="text-4xl font-bold">
                  8/10
                </p>

              </div>

              <div className="
  border
  rounded-xl
  p-4
  transition-all
  duration-300
  hover:shadow-lg
  hover:-translate-y-1
">
                <p className="text-sm text-muted-foreground">
                  Feedback
                </p>

                <p>
                  Strong explanation.
                </p>
              </div>

              <div className="
  border
  rounded-xl
  p-4
  transition-all
  duration-300
  hover:shadow-lg
  hover:-translate-y-1
">
                <p className="text-sm text-muted-foreground">
                  Improvement
                </p>

                <p>
                  Mention stability.
                </p>
              </div>

            </div>

          </CardContent>

        </Card>

      </div>
    </section>
  );
}