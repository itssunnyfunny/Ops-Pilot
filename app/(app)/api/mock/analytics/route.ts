import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        uptime: 99.98,
        activeServices: 42,
        traffic: Array.from({ length: 24 }, (_, i) => ({
            hour: `${i}:00`,
            requests: Math.floor(Math.random() * 5000) + 1000,
            latency: Math.floor(Math.random() * 100) + 20,
        })),
    };

    return NextResponse.json(data);
}
