import { SystemHealth } from "@/components/dashboard/summary-panel";
import { ActiveIncidents } from "@/components/dashboard/incidents-table";
import { RecommendedActions } from "@/components/dashboard/action-list";
import { CommandBar } from "@/components/dashboard/command-bar";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function Dashboard() {
    return (
        <div className="min-h-screen p-8 max-w-[1600px] mx-auto flex flex-col pt-12">
            {/* Page Title & User (Optional Top Bar placeholder) */}
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-light text-white tracking-wide">
                        Dashboard
                    </h2>
                    <p className="text-zinc-500 mt-1">
                        Real-time system overview and AI insights.
                    </p>
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
                    <StatsCards />
                    <ActiveIncidents />
                    <RecommendedActions />
                </div>

            </div>
        </div>
    );
}
