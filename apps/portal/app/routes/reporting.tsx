import type { Route } from "./+types/reporting";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reporting - Portal" },
    { name: "description", content: "Welcome to the Affiliate AI Portal" },
  ];
}

export default function Reporting() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reporting" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Total API Calls</div>
          <div className="text-2xl font-bold">45,231</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Active Models</div>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+2 new this week</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Response Time</div>
          <div className="text-2xl font-bold">124ms</div>
          <p className="text-xs text-muted-foreground">-5% from last hour</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Uptime</div>
          <div className="text-2xl font-bold">99.9%</div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </div>
      </div>
    </div>
  );
}
