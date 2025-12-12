"use client";

import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

export function RunAnalysisButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRun = () => {
        setIsLoading(true);
        // Mock delay
        setTimeout(() => setIsLoading(false), 2000);
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
