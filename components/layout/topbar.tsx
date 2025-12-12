"use client";

import { Zap, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 border border-accent-blue/20">
                    <Zap className="h-5 w-5 text-accent-blue fill-accent-blue/20" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                    OPS PILOT
                </span>
            </div>

            {/* Mobile Menu Trigger (Placeholder for now, could be connected to Sidebar state) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-zinc-400 hover:text-white"
            >
                <Menu size={24} />
            </button>
        </header>
    );
}
