import { NextResponse } from "next/server";

export async function GET() {
    const logs = Array.from({ length: 10 }, (_, i) => ({
        id: `LOG-${i}`,
        level: Math.random() > 0.8 ? "ERROR" : "WARN",
        message: Math.random() > 0.5 ? "Connection timeout" : "Rate limit exceeded",
        service: Math.random() > 0.5 ? "Auth-Service" : "Payment-Gateway",
        timestamp: new Date(Date.now() - i * 60000).toISOString(),
    }));

    return NextResponse.json(logs);
}
