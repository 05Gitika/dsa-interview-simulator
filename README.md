# AI-Powered DSA Interview Simulator

An AI-driven interview preparation platform that helps students practice Data Structures & Algorithms interviews through dynamically generated questions, voice-based responses, and AI-powered evaluation.

Built using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Google's Gemini API.

---

## Overview

Preparing for technical interviews often requires:

* Finding relevant interview questions
* Practicing verbal explanations
* Receiving meaningful feedback
* Tracking improvement over time

Most interview preparation platforms either provide static question banks or focus heavily on coding challenges.

This project simulates a realistic interview environment by generating topic-specific conceptual DSA questions, allowing candidates to answer using text or voice, and receiving detailed AI-generated feedback.

---

## Key Features

### AI Question Generation

Generate interview questions dynamically based on a chosen DSA topic.

Examples:

* Arrays
* Linked Lists
* Trees
* Graphs
* Dynamic Programming
* Recursion
* Hashing

Instead of generating coding problems, the system focuses on conceptual interview-style questions similar to those asked by interviewers.

---

### Voice-to-Text Interview Responses

Candidates can answer questions using speech.

Flow:

Speak
→ Speech Recognition
→ Automatic Transcription
→ Answer Text Area

This creates a more realistic interview experience compared to traditional typing-only platforms.

---

### AI Evaluation Engine

Every answer can be evaluated using Gemini.

The evaluator provides:

* Score (out of 10)
* Detailed feedback
* Improvement suggestions

Example:

Score: 8/10

Feedback:
Good explanation of hash collisions and chaining.

Improvement:
Discuss load factor and rehashing strategies to strengthen the answer.

---

### Progress Tracking

The simulator tracks:

* Current Question
* Total Questions
* Interview Progress
* Candidate Responses

---

### Modern Landing Page

The project includes a dedicated SaaS-style landing page featuring:

* Product Overview
* Features Section
* Workflow Explanation
* Product Preview
* Call To Action

---

## Tech Stack

### Frontend

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* Shadcn UI

### AI Layer

* Gemini API
* Prompt Engineering
* JSON-based Evaluation Responses

### Browser APIs

* Web Speech API
* Speech Recognition API

---

## Architecture

User Selects Topic
↓
Gemini Generates Questions
↓
Interview Session Begins
↓
Candidate Answers Questions
↓
Voice/Text Input
↓
Gemini Evaluates Answers
↓
Feedback & Scores Displayed

---

## Challenges Faced

### 1. Gemini JSON Parsing Issues

#### Problem

Gemini frequently returned responses wrapped inside markdown blocks:

```json
{
  "score": 8
}
```

This caused:

JSON.parse() failures

#### Solution

Implemented preprocessing to remove markdown wrappers before parsing AI responses.

This significantly improved reliability and reduced runtime failures.

---

### 2. Prompt Engineering Challenges

#### Problem

The initial prompt generated coding problems instead of interview questions.

Example:

"Write code to reverse a linked list."

The objective was:

"Explain how a linked list differs from an array."

#### Solution

Refined prompts to explicitly request conceptual interview-style questions.

Result:

Higher quality interview simulations aligned with real-world interviews.

---

### 3. State Management and Runtime Errors

#### Problem

The application encountered:

Cannot read properties of undefined (reading 'length')

This happened because components attempted to access question data before it was available.

#### Solution

Added defensive rendering and proper state initialization to prevent undefined access.

---

### 4. Turbopack Chunk Loading Errors

#### Problem

Development builds occasionally failed with:

ChunkLoadError

#### Solution

Investigated build cache behavior and implemented cache-clearing workflows using:

* .next cleanup
* Development server restart

---

## Why This Project Stands Out

Many AI-based interview preparation tools and resume analyzers focus on document analysis rather than actual interview practice.

Typical AI Resume Analyzer:

* Reads a resume
* Suggests improvements
* Generates a score
* Ends interaction

This project goes beyond analysis.

### Interactive Interview Simulation

Instead of evaluating a document, the platform evaluates candidate thinking and communication.

### Dynamic Question Generation

Questions are generated in real time based on the selected topic.

### Verbal Communication Practice

Voice support helps candidates practice spoken explanations, an area ignored by most resume analyzers.

### Personalized Feedback

The system provides answer-specific feedback rather than generic resume recommendations.

### Real Interview Workflow

The platform mimics:

Topic Selection
→ Interview Questions
→ Candidate Responses
→ Evaluation
→ Improvement Suggestions

This creates a practical learning experience rather than a passive analysis tool.

---

## Future Enhancements

* Automatic evaluation of all answers
* Overall interview performance reports
* Model answers
* PDF report generation
* Authentication with Clerk
* Interview history
* Analytics dashboard
* Voice-only interview mode
* Personalized learning recommendations

---

## Learning Outcomes

Through this project I gained experience with:

* Generative AI integration
* Prompt engineering
* Next.js API routes
* State management in React
* Voice recognition APIs
* JSON parsing and validation
* Error handling strategies
* AI-powered application design

---

## Author

Gitika Chahar

B.Tech Computer Science & Engineering (Data Science)

Netaji Subhas University of Technology (NSUT)
