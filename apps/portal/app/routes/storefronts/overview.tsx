import type { Route } from "./+types/overview";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Overview" },
    { name: "description", content: "Storefront overview" },
  ];
}

export default function StorefrontOverview() {
  return (
    <div className="space-y-6">
      <PageHeader title="Overview" showSearch={false} />

      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">Storefront overview content coming soon.</p>
      </div>
    </div>
  );
}
