import type { Route } from "./+types/api";
import { PageHeader } from "~/components/page-header";
import { Button } from "@workspace/ui/components/button";
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react";
import * as React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "API Settings - Portal" },
    { name: "description", content: "Manage your API keys" },
  ];
}

type ApiKey = {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
};

const apiKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production Key",
    key: "sk-prod-xxxxxxxxxxxxxxxxxxxx",
    createdAt: "2024-01-15",
    lastUsed: "2 hours ago",
  },
  {
    id: "2",
    name: "Development Key",
    key: "sk-dev-xxxxxxxxxxxxxxxxxxxx",
    createdAt: "2024-01-10",
    lastUsed: "5 minutes ago",
  },
];

function ApiKeyRow({ apiKey }: { apiKey: ApiKey }) {
  const [showKey, setShowKey] = React.useState(false);

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex flex-col gap-1">
        <span className="font-medium">{apiKey.name}</span>
        <div className="flex items-center gap-2">
          <code className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded font-mono">
            {showKey ? apiKey.key : apiKey.key.slice(0, 7) + "•".repeat(20)}
          </code>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setShowKey(!showKey)}
          >
            {showKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Copy className="h-3 w-3" />
          </Button>
        </div>
        <span className="text-xs text-muted-foreground">
          Created {apiKey.createdAt} • Last used {apiKey.lastUsed}
        </span>
      </div>
      <Button variant="ghost" size="icon" className="text-destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function ApiSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="API Settings" showSearch={false} />

      <div className="rounded-lg border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">API Keys</h2>
            <p className="text-sm text-muted-foreground">
              Manage your API keys for programmatic access
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Key
          </Button>
        </div>
        <div className="p-4">
          {apiKeys.map((apiKey) => (
            <ApiKeyRow key={apiKey.id} apiKey={apiKey} />
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold mb-2">Rate Limits</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Your current rate limits based on your plan
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted">
            <div className="text-2xl font-bold">10,000</div>
            <div className="text-sm text-muted-foreground">Requests per minute</div>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <div className="text-2xl font-bold">1,000,000</div>
            <div className="text-sm text-muted-foreground">Requests per day</div>
          </div>
        </div>
      </div>
    </div>
  );
}
