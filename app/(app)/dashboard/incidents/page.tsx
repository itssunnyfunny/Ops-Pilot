import { IncidentsList } from "@/components/incidents/incidents-list";

export default function IncidentsPage() {
    return (
        <div className="min-h-screen p-8 max-w-[1600px] mx-auto flex flex-col pt-12">
            <header className="mb-8 ">
                <h2 className="text-3xl font-light text-white tracking-wide">
                    Incidents
                </h2>
                <p className="text-zinc-500 mt-1">
                    Track and manage system events.
                </p>
            </header>

            <IncidentsList />
        </div>
    );
}
