"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, LayoutDashboard, AlertTriangle, Settings, LifeBuoy } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Incidents", href: "/dashboard/incidents", icon: AlertTriangle },
        { name: "Settings", href: "/settings", icon: Settings },
    ];

    return (
        <div className="flex h-screen w-64 flex-col justify-between border-r border-white/10 bg-black/40 backdrop-blur-xl p-4 fixed left-0 top-0 z-50">
            <div>
                {/* Logo */}
                <div className="mb-8 flex items-center gap-3 px-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 border border-accent-blue/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                        <Zap className="h-6 w-6 text-accent-blue fill-accent-blue/20" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        OPS PILOT
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                  ${isActive
                                        ? "bg-accent-blue/10 text-white shadow-[0_0_15px_rgba(0,240,255,0.05)] border border-accent-blue/10"
                                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                                    }
                `}
                            >
                                <item.icon
                                    size={20}
                                    className={`transition-colors duration-200 ${isActive ? "text-accent-blue" : "text-zinc-500 group-hover:text-zinc-300"
                                        }`}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer / Helper Links */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors">
                    <LifeBuoy size={20} className="text-zinc-500" />
                    Help & Support
                </button>
            </div>
        </div>
    );
}
