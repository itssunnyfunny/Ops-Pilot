
export type Priority = "critical" | "high" | "medium" | "low";

export type IncidentAction =
  | "create_github_issue"
  | "notify_team"
  | "ignore"
  | "create_support_ticket";

export type SourceSystem = "analytics" | "errors" | "support" | "github";

export type IncidentStatus = "new" | "approved" | "overridden";

export interface Incident {
  id: string;
  title: string;
  description: string;
  source: SourceSystem;
  priority: Priority;
  recommendedAction: IncidentAction;
  assignee: "frontend" | "backend" | "devops" | "support";
  reasoning: string;
  createdAt: string;
  status: IncidentStatus;
}
