import { NextResponse } from "next/server";

// Mock Database
const incidents = [
    {
        id: "INC-001",
        title: "Database latency in EU-West",
        priority: "Critical",
        status: "active",
        region: "EU-West",
        createdAt: new Date().toISOString(),
    },
    {
        id: "INC-002",
        title: "Server load increase in AP-South",
        priority: "Warning",
        status: "investigating",
        region: "AP-South",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
];

export async function GET() {
    // Simulate DB Delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return NextResponse.json(incidents);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newIncident = {
        id: `INC-${Math.floor(Math.random() * 1000)}`,
        ...body,
        createdAt: new Date().toISOString(),
    };
    return NextResponse.json(newIncident, { status: 201 });
}
