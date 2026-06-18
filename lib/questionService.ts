import ai from "./gemini";

export async function generateQuestions(
  topic: string,
  difficulty: string,
  count: number,
  analysis?: any
) {
  const analysisContext = analysis
  ? `
Candidate Analysis:

Strong Topics:
${analysis.analysis?.strengths
  ?.map((t: any) => t.tagName)
  .join(", ")}

Weak Topics:
${analysis.analysis?.weaknesses
  ?.map((t: any) => t.tagName)
  .join(", ")}

Recommended Topics:
${analysis.analysis?.recommendedTopics?.join(", ") || ""}

Generate questions that match the
candidate's current skill level.

If the selected topic is one of the weak
topics, focus on fundamentals, common mistakes,
core concepts, and interview traps.

If the selected topic is one of the strong
topics, ask deeper conceptual questions and
follow-up style interview questions.
`
  : "";
 const prompt = `
You are a senior DSA interviewer.

Topic: ${topic}

Difficulty: ${difficulty}

${analysisContext}
Topic Performance:

Advanced Topics:
${JSON.stringify(
  analysis.profile?.tagProblemCounts?.advanced || []
)}

Intermediate Topics:
${JSON.stringify(
  analysis.profile?.tagProblemCounts?.intermediate || []
)}

Fundamental Topics:
${JSON.stringify(
  analysis.profile?.tagProblemCounts?.fundamental || []
)}

Generate exactly ${count} conceptual DSA interview questions.

Rules:

- Difficulty must be ${difficulty}
- No coding questions
- No implementation tasks
- Interview-style conceptual questions only
- Questions should adapt to the candidate profile
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

    async function generateWithRetry(
      prompt: string,
      retries = 3
    ) {
      try {
        const response =
          await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
          });

        return response;
      } catch (error: any) {

        console.error(
          "Gemini API Error:",
          error
        );

        if (
          error?.status === 503 &&
          retries > 0
        ) {

          console.log(
            `Retrying... ${retries} attempts left`
          );

          await new Promise((resolve) =>
            setTimeout(resolve, 2000)
          );

          return generateWithRetry(
            prompt,
            retries - 1
          );
        }

        throw error;
      }
    }

    const response = await generateWithRetry(prompt);
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