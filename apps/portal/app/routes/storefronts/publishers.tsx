import type { Route } from "./+types/overview";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Publishers" },
    { name: "description", content: "Publishers" },
  ];
}

export default function TeamSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Publishers" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">Publishers content coming soon.</p>
      </div>
    </div>
  );
}
