import { SystemHealth } from "@/components/dashboard/summary-panel";
import { ActiveIncidents } from "@/components/dashboard/incidents-table";
import { RecommendedActions } from "@/components/dashboard/action-list";
import { CommandBar } from "@/components/dashboard/command-bar";
import { Zap } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto flex flex-col justify-center">
            {/* Header */}
            <header className="mb-12 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 rounded-xl border border-accent-blue/20">
                        <Zap className="text-accent-blue fill-accent-blue/20" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        OPS PILOT
                    </h1>
                </div>
                <div className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer" />
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

                {/* Left Column: System Health (Span 7) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <SystemHealth />
                    <CommandBar />
                </div>

                {/* Right Column: Incidents & Actions (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <ActiveIncidents />
                    <RecommendedActions />
                </div>

            </div>
        </div>
    );
}
