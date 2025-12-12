import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import Link from "next/link";

interface IncidentRowProps {
    id: string;
    title: string;
    priority: "Critical" | "Warning" | "Info";
    status: string;
    timestamp: string;
}

export function IncidentRow({ id, title, priority, status, timestamp }: IncidentRowProps) {
    const priorityConfig = {
        Critical: { color: "text-accent-red", icon: AlertTriangle, bg: "bg-accent-red/10" },
        Warning: { color: "text-yellow-400", icon: Info, bg: "bg-yellow-400/10" },
        Info: { color: "text-accent-green", icon: CheckCircle, bg: "bg-accent-green/10" },
    };

    const config = priorityConfig[priority] || priorityConfig.Info;
    const Icon = config.icon;

    return (
        <Link
            href={`/dashboard/incidents/${id}`}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5"
        >
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${config.bg} ${config.color}`}>
                    <Icon size={20} />
                </div>
                <div>
                    <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-zinc-500 font-mono">#{id}</span>
                        <span className="text-xs text-zinc-600">•</span>
                        <span className={`text-xs ${config.color}`}>{status}</span>
                    </div>
                </div>
            </div>
            <div className="text-sm text-zinc-500 font-mono">
                {timestamp}
            </div>
        </Link>
    );
}
