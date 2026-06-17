export function recommendDifficulty(
  solved: number
) {
  if (solved < 10) return "Easy";

  if (solved < 50) return "Medium";

  return "Hard";
}