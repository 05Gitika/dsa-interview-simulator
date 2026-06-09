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

        <Card className="shadow-xl border-2">

          <CardHeader>
            <CardTitle>
              Live Interview Preview
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            <div>
              <p className="text-sm text-muted-foreground">
                Question 1 of 5
              </p>

              <h3 className="font-semibold text-xl mt-2">
                Explain the difference between
                Merge Sort and Quick Sort.
              </h3>
            </div>

            <div className="border rounded-lg p-4 bg-muted/30">
              <p className="text-sm font-medium mb-2">
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

              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Score
                </p>

                <p className="text-2xl font-bold">
                  8/10
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Feedback
                </p>

                <p>
                  Strong explanation.
                </p>
              </div>

              <div className="border rounded-lg p-4">
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