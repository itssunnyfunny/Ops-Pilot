"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Info, Search, Filter } from "lucide-react";
import Link from "next/link";

export function IncidentsList() {
    const [filter, setFilter] = useState("all");

    const incidents = [
        {
            id: "INC-001",
            title: "Database latency in EU-West",
            priority: "Critical",
            level: "P1",
            status: "active",
            color: "text-accent-red",
            icon: AlertTriangle,
            shadow: "shadow-neon-red",
            bg: "bg-accent-red/10",
            border: "border-accent-red/20",
            date: "2 mins ago",
            region: "EU-West"
        },
        {
            id: "INC-002",
            title: "Server load increase in AP-South",
            priority: "Warning",
            level: "P2",
            status: "investigating",
            color: "text-yellow-400",
            icon: Info,
            shadow: "shadow-none",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20",
            date: "15 mins ago",
            region: "AP-South"
        },
        {
            id: "INC-003",
            title: "Deployment successful in US-Central",
            priority: "Info",
            level: "Info",
            status: "resolved",
            color: "text-accent-green",
            icon: CheckCircle,
            shadow: "shadow-neon-green",
            bg: "bg-accent-green/10",
            border: "border-accent-green/20",
            date: "1 hour ago",
            region: "US-Central"
        },
        {
            id: "INC-004",
            title: "API Rate limits approaching",
            priority: "Warning",
            level: "P3",
            status: "active",
            color: "text-yellow-400",
            icon: Info,
            shadow: "",
            bg: "bg-yellow-400/5",
            border: "border-yellow-400/20",
            date: "2 hours ago",
            region: "Global"
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="glass-panel flex items-center gap-3 px-4 py-3 rounded-xl w-full md:w-96 focus-within:border-accent-blue/50 transition-colors">
                    <Search className="text-zinc-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search incidents..."
                        className="bg-transparent text-white placeholder-zinc-500 outline-none w-full"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="glass-panel px-4 py-3 rounded-xl flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="glass-panel rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-zinc-400 text-sm font-medium uppercase tracking-wider">
                            <tr>
                                <th className="p-6">Incident</th>
                                <th className="p-6">Status</th>
                                <th className="p-6">Region</th>
                                <th className="p-6">Time</th>
                                <th className="p-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {incidents.map((incident) => (
                                <tr key={incident.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-6">
                                        <Link href={`/dashboard/incidents/${incident.id}`} className="block">
                                            <div className="flex items-center gap-4">
                                                <div className={`rounded-xl p-2.5 ${incident.bg} ${incident.color}`}>
                                                    <incident.icon size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white group-hover:text-accent-blue transition-colors">
                                                        {incident.title}
                                                    </div>
                                                    <div className="text-xs text-zinc-500 mt-1">
                                                        ID: {incident.id}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className="p-6">
                                        <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border ${incident.border} ${incident.bg} ${incident.color}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${incident.color} bg-current`}></span>
                                            {incident.level} • {incident.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-zinc-300">
                                        {incident.region}
                                    </td>
                                    <td className="p-6 text-zinc-400 text-sm">
                                        {incident.date}
                                    </td>
                                    <td className="p-6 text-right">
                                        <Link href={`/dashboard/incidents/${incident.id}`} className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
