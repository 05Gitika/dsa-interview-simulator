import mongoose, { Schema } from "mongoose";

const InterviewSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },

    totalScore: {
      type: Number,
      required: true,
    },

    averageScore: {
      type: Number,
      required: true,
    },

    highestScore: {
      type: Number,
      required: true,
    },

    lowestScore: {
      type: Number,
      required: true,
    },

    strengths: [String],

    weaknesses: [String],

    feedbacks: [String],

    improvements: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Interview ||
  mongoose.model(
    "Interview",
    InterviewSchema
  );