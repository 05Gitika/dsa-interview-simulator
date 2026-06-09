import ai from "./gemini";
import { Evaluation } from "@/types/evaluation";

export async function evaluateAnswer(
  question: string,
  answer: string
): Promise<Evaluation> {
  const prompt = `
You are a DSA interview evaluator.

Evaluate the candidate answer.

Question:
${question}

Answer:
${answer}

Return ONLY valid JSON.

{
  "score": 0,
  "feedback": "",
  "improvement": ""
}

Rules:
- score must be between 0 and 10
- feedback should explain what was good
- improvement should explain what is missing
- do not return markdown
- do not return explanations outside JSON
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text =
    response.text
      ?.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim() || "";

  try {
    const parsed = JSON.parse(text);

    return {
      score: Number(parsed.score) || 0,
      feedback:
        parsed.feedback ||
        "No feedback provided.",
      improvement:
        parsed.improvement ||
        "No improvement provided.",
    };
  } catch (error) {
    console.error(error);

    return {
      score: 0,
      feedback:
        "Unable to evaluate answer.",
      improvement:
        "Please try again.",
    };
  }
}