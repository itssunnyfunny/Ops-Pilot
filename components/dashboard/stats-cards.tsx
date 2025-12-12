import { ArrowUpRight, ArrowDownRight, Activity, Clock, ShieldCheck } from "lucide-react";

export function StatsCards() {
    const stats = [
        {
            label: "System Uptime",
            value: "99.98%",
            change: "+0.02%",
            trend: "up",
            icon: Activity,
            color: "text-accent-green"
        },
        {
            label: "MTTR (Avg)",
            value: "14m",
            change: "-2m",
            trend: "down", // down is good for MTTR, but visually we might want green
            isPositive: true,
            icon: Clock,
            color: "text-accent-blue"
        },
        {
            label: "Active Services",
            value: "42",
            change: "Stable",
            trend: "neutral",
            icon: ShieldCheck,
            color: "text-fuchsia-400"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
                <div key={stat.label} className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                            <stat.icon size={20} />
                        </div>
                        <div className={`flex items-center text-xs font-medium ${stat.isPositive || stat.trend === 'up' ? 'text-accent-green' : 'text-zinc-400'}`}>
                            {stat.change}
                            {stat.trend === 'up' && <ArrowUpRight size={14} className="ml-1" />}
                            {stat.trend === 'down' && <ArrowDownRight size={14} className="ml-1" />}
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-zinc-500">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
