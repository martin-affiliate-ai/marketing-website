import { Search } from "lucide-react";
import { Input } from "@workspace/ui/components/input";

interface PageHeaderProps {
  title: string;
  showSearch?: boolean;
}

export function PageHeader({ title, showSearch = true }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between pb-4">
      <h1 className="text-2xl font-semibold tracking-tight">{title}<span className="text-pink-500">.</span></h1>
      {showSearch && (
        <div className="relative max-w-[320px] w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9"
          />
        </div>
      )}
    </div>
  );
}
