export interface TopicAnalysis {
  tagName: string;
  solved: number;
}

export interface ProfileAnalysis {
  strengths: TopicAnalysis[];
  weaknesses: TopicAnalysis[];
  strongestTopic: string;
  weakestTopic: string;
}