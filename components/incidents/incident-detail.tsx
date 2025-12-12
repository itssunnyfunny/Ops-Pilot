"use client";

import { AlertTriangle, Clock, Server, CheckCircle, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function IncidentDetail({ id }: { id: string }) {
    // Mock data - in real app would fetch based on ID
    const incident = {
        id: id,
        title: "Database latency spike in EU-West Region",
        description: "Unusual query execution time detected in primary replica set. P99 latency exceeded 500ms threshold for 5 consecutive minutes.",
        severity: "Critical",
        status: "Investigating",
        startedAt: "10:42 AM",
        duration: "24m",
        affectedServices: ["Payment Gateway", "User Auth"],
        timeline: [
            { time: "10:42 AM", message: "Alert triggered: High Latency (EU-West-1)", type: "alert" },
            { time: "10:43 AM", message: "Ops Pilot initialized investigation", type: "bot" },
            { time: "10:45 AM", message: "Identified read-heavy query load from analytics service", type: "info" },
        ]
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <Link href="/dashboard/incidents" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors w-fit">
                    <ArrowLeft size={16} />
                    Back to Incidents
                </Link>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-accent-red/20 text-accent-red px-3 py-1 rounded-full text-xs font-bold border border-accent-red/20 shadow-[0_0_10px_rgba(255,42,109,0.2)]">
                                {incident.severity}
                            </span>
                            <span className="text-zinc-500 text-sm font-mono">#{incident.id}</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white leading-tight max-w-3xl">
                            {incident.title}
                        </h1>
                    </div>

                    <div className="flex gap-3">
                        <button className="glass-panel px-5 py-2.5 rounded-xl font-medium text-white hover:bg-white/10 transition-colors">
                            Acknowledge
                        </button>
                        <button className="bg-white text-black px-5 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                            Resolve
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Context Card */}
                    <div className="glass-panel p-6 rounded-3xl">
                        <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">Context</h3>
                        <p className="text-zinc-200 text-lg leading-relaxed">
                            {incident.description}
                        </p>
                        <div className="flex gap-6 mt-8 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <Clock className="text-zinc-500" size={20} />
                                <div>
                                    <div className="text-xs text-zinc-500">Duration</div>
                                    <div className="text-white font-medium">{incident.duration}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                    <Server className="text-zinc-500" size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-500">Affected</div>
                                    <div className="text-white font-medium">{incident.affectedServices.length} Services</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="glass-panel p-6 rounded-3xl">
                        <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-6">Investigation Timeline</h3>
                        <div className="relative border-l border-white/10 ml-3 space-y-8 pb-4">
                            {incident.timeline.map((event, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border border-black ${event.type === 'alert' ? 'bg-accent-red' : event.type === 'bot' ? 'bg-accent-blue' : 'bg-zinc-500'}`}></div>
                                    <div className="text-xs text-zinc-500 mb-1">{event.time}</div>
                                    <div className="text-zinc-200">{event.message}</div>
                                </div>
                            ))}
                            <div className="relative pl-8 opacity-50">
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700"></div>
                                <div className="text-sm text-zinc-500 italic">Listening for updates...</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="flex flex-col gap-6">
                    <div className="glass-panel p-6 rounded-3xl">
                        <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">AI Analysis</h3>
                        <div className="bg-accent-blue/5 border border-accent-blue/10 rounded-xl p-4 mb-4">
                            <div className="flex gap-3 mb-2">
                                <ShieldAlert className="text-accent-blue shrink-0" size={20} />
                                <span className="font-medium text-accent-blue text-sm">Root Cause Confidence: 85%</span>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                High likelihood of resource contention caused by unoptimized analytics query batch.
                            </p>
                        </div>
                        <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm text-zinc-300">
                            View Logs
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
