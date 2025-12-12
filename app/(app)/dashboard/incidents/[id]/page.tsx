import { IncidentDetail } from "@/components/incidents/incident-detail";

export default function IncidentDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen p-8 max-w-[1600px] mx-auto flex flex-col pt-6">
            <IncidentDetail id={params.id} />
        </div>
    );
}
