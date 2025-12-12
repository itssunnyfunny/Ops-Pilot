import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export function ActiveIncidents() {
    const incidents = [
        {
            id: 1,
            title: "Database latency in EU-West",
            priority: "Critical",
            level: "P1",
            status: "active",
            color: "text-accent-red",
            icon: AlertTriangle,
            shadow: "shadow-neon-red",
            bg: "bg-accent-red/10",
            border: "border-accent-red/20"
        },
        {
            id: 2,
            title: "Server load increase in AP-South",
            priority: "Warning",
            level: "P2",
            status: "active",
            color: "text-yellow-400",
            icon: Info,
            shadow: "shadow-none",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20"
        },
        {
            id: 3,
            title: "Deployment successful in US-Central",
            priority: "Info",
            level: "Info",
            status: "resolved",
            color: "text-accent-green",
            icon: CheckCircle,
            shadow: "shadow-neon-green",
            bg: "bg-accent-green/10",
            border: "border-accent-green/20"
        },
    ];

    return (
        <div className="glass-panel flex flex-col rounded-3xl p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Active Incidents
            </h3>
            <div className="flex flex-col gap-3">
                {incidents.map((incident) => (
                    <div
                        key={incident.id}
                        className={`group flex items-center justify-between rounded-xl border p-4 transition-all hover:bg-white/5 ${incident.border} ${incident.bg}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`rounded-full p-2 ${incident.color} bg-black/20`}>
                                <incident.icon size={20} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-sm font-medium ${incident.color} ${incident.shadow}`}>
                                        {incident.priority}
                                    </span>
                                    <span className="text-xs text-zinc-500">
                                        • {incident.status}
                                    </span>
                                </div>
                                <p className="font-medium text-zinc-200 group-hover:text-white">
                                    {incident.title}
                                </p>
                            </div>
                        </div>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-xs font-bold ${incident.color}`}>
                            {incident.level}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
