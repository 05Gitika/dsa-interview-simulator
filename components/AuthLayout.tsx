import React from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-slate-50 border-r">

        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-6">
            AI DSA Interview Simulator
          </h1>

          <p className="text-lg text-slate-600 mb-10">
            Personalized mock interviews powered by
            Gemini AI and LeetCode profile analysis.
          </p>

          <div className="space-y-4 text-slate-700">

            <div>
              ✓ Personalized Interview Generation
            </div>

            <div>
              ✓ LeetCode Topic Analysis
            </div>

            <div>
              ✓ AI Answer Evaluation
            </div>

            <div>
              ✓ Voice-Based Responses
            </div>

            <div>
              ✓ Interview Performance Reports
            </div>

          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              {title}
            </h2>

            <p className="text-slate-500 mt-2">
              {subtitle}
            </p>

          </div>

          {children}

        </div>
      </div>
    </div>
  );
}