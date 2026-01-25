import { ChevronDown, SquarePlusIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@workspace/ui/components/dropdown-menu";
import { SidebarMenuButton } from "@workspace/ui/components/sidebar";
import type { Storefront } from "~/hooks/use-storefront";

interface StorefrontSelectorProps {
  storefronts: Storefront[];
  value: string;
  onValueChange: (value: string) => void;
}

export function StorefrontSelector({
  storefronts,
  value,
  onValueChange,
}: StorefrontSelectorProps) {
  const selected = storefronts.find((s) => s.name === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton size="sm" className="mb-2">
          <div
            className="size-4 rounded-full"
            style={{ backgroundColor: selected?.color }}
          />
          <span className="group-data-[collapsible=icon]:hidden">{value}</span>
          <ChevronDown className="ml-auto group-data-[collapsible=icon]:hidden" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Storefront</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            {storefronts.map((storefront) => (
              <DropdownMenuRadioItem
                key={storefront.name}
                value={storefront.name}
              >
                <div
                  className="size-4 rounded-full"
                  style={{ backgroundColor: storefront.color }}
                />
                {storefront.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SquarePlusIcon/> Add New Storefront
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
