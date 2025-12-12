import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { incidentId } = await request.json();

    // Simulate AI Processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
        incidentId,
        analysis: "Root cause identified: Connection pool exhaustion in primary DB replica.",
        confidence: 0.89,
        recommendedActions: [
            "Increase max_connections parameter",
            "Restart read-replica-2",
        ],
    });
}
