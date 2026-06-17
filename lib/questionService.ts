import ai from "./gemini";

export async function generateQuestions(
  topic: string,
  difficulty: string,
  count: number
) {
  const prompt = `
You are a DSA interviewer.

Topic: ${topic}

Difficulty: ${difficulty}

Generate exactly ${count} conceptual DSA interview questions.

Rules:

- Difficulty must be ${difficulty}
- No coding questions
- No implementation tasks
- Interview-style conceptual questions only
- Return JSON only

Format:

{
  "questions": [
    "...",
    "...",
    "..."
  ]
}
`;

  try {
    console.log(
      "Generating questions for:",
      topic
    );

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    const text =
      response.text ?? "";

    console.log(
      "RAW GEMINI RESPONSE:"
    );

    console.log(text);

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed =
      JSON.parse(cleanedText);

    console.log(
      "PARSED RESPONSE:"
    );

    console.log(parsed);

    return parsed;
  } catch (error) {
    console.error(
      "QUESTION GENERATION ERROR:",
      error
    );

    throw error;
  }
}