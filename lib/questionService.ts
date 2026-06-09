import ai from "./gemini";

export async function generateQuestions(
  topic: string
) {
const prompt = `
You are a DSA interviewer.

The topic is:

${topic}

Generate exactly 5 interview questions about ${topic}.

Question Structure:

1. Basic understanding
2. Approach discussion
3. Complexity analysis
4. Optimization discussion
5. Advanced follow-up

Do not generate new coding problems.

Return ONLY JSON:

{
  "questions": [
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
}
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

  const text = response.text ?? "";
  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

return JSON.parse(cleanedText);
}