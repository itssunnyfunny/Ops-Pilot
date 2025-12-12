"use client";

import { Activity } from "lucide-react";

export function SystemHealth() {
    return (
        <div className="glass-panel relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10 min-h-[320px]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent-blue/10 blur-[80px]" />

            <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                    <h2 className="text-xl font-medium tracking-wide text-accent-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                        SYSTEM HEALTH
                    </h2>
                    <div className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-blue shadow-neon-blue"></span>
                    </div>
                </div>

                <p className="max-w-2xl text-4xl font-light leading-snug text-foreground/90 md:text-5xl">
                    System stable, traffic spike detected in region <span className="font-normal text-white">US-East</span>.
                </p>

                <p className="mt-6 text-lg text-zinc-400">
                    180 operational tasks optimized in the last hour.
                </p>
            </div>

            <div className="relative z-10 mt-8 flex items-end justify-between">
                <div className="flex gap-2">
                    {/* Waveform visual placeholder */}
                    <div className="flex items-end gap-1 h-12">
                        {[40, 70, 45, 90, 60, 75, 50].map((h, i) => (
                            <div
                                key={i}
                                className="w-1.5 rounded-full bg-accent-blue/50"
                                style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }}
                            />
                        ))}
                    </div>
                </div>
                <Activity className="h-16 w-16 text-accent-blue opacity-20" />
            </div>
        </div>
    );
}
