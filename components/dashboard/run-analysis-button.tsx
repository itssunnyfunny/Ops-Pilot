"use client";

import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

export function RunAnalysisButton({ onComplete }: { onComplete: (data: any) => void }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRun  = async () => {
    setIsLoading(true);
    setError("");

    try {
      // 1️⃣ Start Kestra flow
      const startRes = await fetch("/api/run-analysis", {
        method: "POST"
      });
      const { executionId } = await startRes.json();

      // 2️⃣ Poll for result
      const poll = async () => {
        const res = await fetch(
          `/api/analysis-result?executionId=${executionId}`
        );
        const data = await res.json();

        if (data.status === "COMPLETED") {
          onComplete(data.result);
          setIsLoading(false);
        } else {
          setTimeout(poll, 2000);
        }
      };

      poll();
    } catch (e) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

    return (
        <button
            onClick={handleRun}
            disabled={isLoading}
            className={`
        relative group flex items-center gap-2 px-4 py-2 rounded-xl 
        bg-accent-blue/10 text-accent-blue border border-accent-blue/20 
        hover:bg-accent-blue/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] 
        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
      `}
        >
            {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
            ) : (
                <Sparkles size={18} className="group-hover:animate-pulse" />
            )}
            <span className="font-medium">
                {isLoading ? "Analyzing..." : "Run AI Analysis"}
            </span>
        </button>
    );
}
