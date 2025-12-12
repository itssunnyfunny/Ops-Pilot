import { Search, Command } from "lucide-react";

export function CommandBar() {
    return (
        <div className="glass-panel relative mt-8 flex w-full items-center gap-4 rounded-2xl border-white/10 px-6 py-5 shadow-2xl transition-all focus-within:border-accent-blue/50 focus-within:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <Search className="h-6 w-6 text-zinc-400" />
            <input
                type="text"
                placeholder="Ask Ops Pilot or enter a command..."
                className="h-full w-full bg-transparent text-xl text-white placeholder-zinc-500 outline-none"
            />
            <div className="hidden md:flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1 text-xs font-medium text-zinc-400">
                <Command size={12} />
                <span>K</span>
            </div>
        </div>
    );
}
