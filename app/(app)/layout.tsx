import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#0a0a0a] to-black text-foreground">
            <Sidebar />
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <Topbar />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
