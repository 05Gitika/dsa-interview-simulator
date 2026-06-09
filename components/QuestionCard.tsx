interface QuestionCardProps {
  question: string;
}

export function QuestionCard({
  question,
}: QuestionCardProps) {
  return (
    <div className="border rounded-lg p-3">
      <p className="font-semibold">Question:</p>
      <p>{question}</p>
    </div>
    
  );
}