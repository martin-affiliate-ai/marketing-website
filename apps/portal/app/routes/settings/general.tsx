import type { Route } from "./+types/general";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "General Settings - Portal" },
    { name: "description", content: "General settings" },
  ];
}

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="General Settings" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">General settings content coming soon.</p>
      </div>
    </div>
  );
}
