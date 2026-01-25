import type { Route } from "./+types/overview";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Campaigns" },
    { name: "description", content: "Campaigns" },
  ];
}

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <PageHeader title="Campaigns" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">Campaigns content coming soon.</p>
      </div>
    </div>
  );
}
