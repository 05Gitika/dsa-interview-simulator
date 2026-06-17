export interface TagProblemCounts {
  advanced: {
    tagName: string;
    problemsSolved: number;
  }[];

  intermediate: {
    tagName: string;
    problemsSolved: number;
  }[];

  fundamental: {
    tagName: string;
    problemsSolved: number;
  }[];
}