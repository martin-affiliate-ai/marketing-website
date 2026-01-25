import type { Route } from "./+types/team";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team Settings - Portal" },
    { name: "description", content: "Team settings" },
  ];
}

export default function TeamSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Team Settings" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">Team settings content coming soon.</p>
      </div>
    </div>
  );
}
