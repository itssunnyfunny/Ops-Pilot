import { ArrowRight, Settings, Database, Server } from "lucide-react";

export function RecommendedActions() {
    const actions = [
        {
            id: 1,
            title: "Review auto-scaling policy for US-East",
            icon: Server,
        },
        {
            id: 2,
            title: "Optimize query performance in EU-West",
            icon: Database,
        },
        {
            id: 3,
            title: "Schedule maintenance for backup servers",
            icon: Settings,
        },
    ];

    return (
        <div className="glass-panel flex flex-col rounded-3xl p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Recommended Actions
            </h3>
            <div className="flex flex-col gap-2">
                {actions.map((action) => (
                    <button
                        key={action.id}
                        className="group flex w-full items-center justify-between rounded-xl border border-transparent bg-white/5 p-4 text-left transition-all hover:border-accent-blue/30 hover:bg-accent-blue/5 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                    >
                        <div className="flex items-center gap-3">
                            <action.icon className="text-zinc-400 group-hover:text-accent-blue transition-colors" size={18} />
                            <span className="text-zinc-300 group-hover:text-white transition-colors">
                                {action.title}
                            </span>
                        </div>
                        <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all text-accent-blue group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                ))}
            </div>
        </div>
    );
}
