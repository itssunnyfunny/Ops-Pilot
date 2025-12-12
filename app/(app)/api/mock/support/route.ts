import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    window: {
      dateFrom: "2025-12-11T00:00:00Z",
      dateTo: "2025-12-12T12:00:00Z"
    },
    openTickets: 42,
    highPriorityTickets: 9,
    avgResponseMinutes: 85,
    recentTickets: [
      {
        id: "tk-9001",
        subject: "Users reporting failed payments",
        description: "Multiple customers report payment failures; timeout during final step.",
        createdAt: "2025-12-12T10:20:00Z",
        priority: "high",
        affectedUsers: 6,
        suggestedTags: ["payments", "checkout"]
      },
      {
        id: "tk-9002",
        subject: "Signup confirmation emails delayed",
        description: "Users not receiving confirmation fast enough, causing dropoffs.",
        createdAt: "2025-12-12T09:50:00Z",
        priority: "medium",
        affectedUsers: 30,
        suggestedTags: ["email", "onboarding"]
      },
      {
        id: "tk-9003",
        subject: "Dashboard shows blank screen",
        description: "After last deploy some users see blank dashboard.",
        createdAt: "2025-12-12T08:12:00Z",
        priority: "medium",
        affectedUsers: 4,
        suggestedTags: ["frontend", "ui"]
      }
    ],
    trends: {
      highPriorityIncrease: true,
      topTags: ["payments", "onboarding", "auth"]
    }
  });
}
