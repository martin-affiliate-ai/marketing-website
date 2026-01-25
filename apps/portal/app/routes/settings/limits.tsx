import type { Route } from "./+types/limits";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Limits Settings - Portal" },
    { name: "description", content: "Usage limits" },
  ];
}

export default function LimitsSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Usage Limits" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">Usage limits content coming soon.</p>
      </div>
    </div>
  );
}
