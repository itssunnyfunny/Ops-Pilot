import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    window: {
      dateFrom: "2025-12-11T00:00:00Z",
      dateTo: "2025-12-12T12:00:00Z"
    },
    totalErrors: 312,
    criticalErrors: 27,
    errorRate: 0.051,
    recentErrorsCountLast15Min: 182,
    recentErrors: [
      {
        id: "err-1001",
        path: "/checkout",
        count: 142,
        message: "Payment request failed (gateway timeout)",
        level: "critical",
        sampleStack: "PaymentService.process→HTTPGateway.timeout",
        firstSeen: "2025-12-12T10:05:00Z",
        lastSeen: "2025-12-12T11:40:00Z"
      },
      {
        id: "err-1002",
        path: "/api/auth",
        count: 58,
        message: "Invalid token / malformed header",
        level: "high",
        sampleStack: "AuthMiddleware.validateToken",
        firstSeen: "2025-12-12T09:58:00Z",
        lastSeen: "2025-12-12T11:20:00Z"
      },
      {
        id: "err-1003",
        path: "/dashboard",
        count: 21,
        message: "TypeError: Cannot read property 'map' of undefined",
        level: "medium",
        sampleStack: "Dashboard.render→fetchSummary",
        firstSeen: "2025-12-12T08:50:00Z",
        lastSeen: "2025-12-12T10:30:00Z"
      }
    ],
    spike: {
      occurred: true,
      spikePath: "/checkout",
      increasePercentage: 430,
      spikeStart: "2025-12-12T10:00:00Z",
      spikeEnd: "2025-12-12T11:45:00Z"
    },
    sampleLogs: [
      { ts: "2025-12-12T11:39:12Z", level: "error", text: "Payment gateway timeout id=tx_9f3a" },
      { ts: "2025-12-12T11:38:55Z", level: "error", text: "404 on /assets/logo.svg" },
      { ts: "2025-12-12T11:37:03Z", level: "warn", text: "Slow DB query: 1200ms" }
    ]
  });
}

