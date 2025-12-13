import { NextRequest, NextResponse } from "next/server";

const KESTRA_URL = process.env.KESTRA_URL!;

export async function GET(req: NextRequest) {
  const executionId = req.nextUrl.searchParams.get("executionId");

  if (!executionId) {
    return NextResponse.json(
      { error: "executionId missing" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${KESTRA_URL}/api/v1/executions/${executionId}/outputs/result`
    );

    if (!res.ok) {
      return NextResponse.json({ status: "RUNNING" });
    }

    const result = await res.json();

    return NextResponse.json({
      status: "COMPLETED",
      result
    });
  } catch (err) {
    return NextResponse.json({ status: "RUNNING" });
  }
}
