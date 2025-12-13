import { NextResponse } from "next/server";

const KESTRA_URL = process.env.KESTRA_URL!;
const KESTRA_FLOW_ID = "ops-pilot-analysis";
const KESTRA_NAMESPACE = "hackathon";

export async function POST() {
  try {
    const res = await fetch(
      `${KESTRA_URL}/api/v1/executions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          namespace: KESTRA_NAMESPACE,
          flowId: KESTRA_FLOW_ID,
          inputs: {
            demoMode: true
          }
        })
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const execution = await res.json();

    return NextResponse.json({
      executionId: execution.id
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to start analysis" },
      { status: 500 }
    );
  }
}
