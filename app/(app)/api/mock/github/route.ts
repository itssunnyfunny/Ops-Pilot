import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    repo: "org/ops-pilot",
    openIssues: 14,
    openPRs: 5,
    recentPRs: [
      {
        id: "pr-501",
        title: "Fix flaky checkout timeout",
        author: "alice",
        createdAt: "2025-12-11T16:20:00Z",
        status: "open",
        linkedIssue: "err-1001"
      },
      {
        id: "pr-502",
        title: "Improve signup form validation",
        author: "bob",
        createdAt: "2025-12-10T09:03:00Z",
        status: "merged",
        linkedIssue: null
      }
    ],
    issueSamples: [
      {
        id: "issue-201",
        title: "Payment gateway timeouts",
        body: "Observed large increase in gateway timeouts after 2025-12-11 deploy.",
        labels: ["bug", "priority/high", "area/payments"],
        createdAt: "2025-12-12T10:40:00Z"
      },
      {
        id: "issue-202",
        title: "Onboarding UX regression",
        body: "New change introduced unexpected required field.",
        labels: ["bug", "area/frontend"],
        createdAt: "2025-12-12T09:30:00Z"
      }
    ],
    contributors: [
      { login: "alice", commitsLastWeek: 6 },
      { login: "bob", commitsLastWeek: 3 }
    ]
  });
}
