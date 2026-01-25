import {
  type LucideIcon,
  ChartSpline,
  SquarePercent,
  Store,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import { StorefrontSelector } from "~/components/storefront-selector";
import { useStorefront } from "~/hooks/use-storefront";

type NavItem = {
  title: string;
  basePath: string;
  icon?: LucideIcon;
};

const navItems: NavItem[] = [
  {
    title: "Overview",
    basePath: "/overview",
    icon: ChartSpline,
  },
  {
    title: "Campaigns",
    basePath: "/campaigns",
    icon: SquarePercent,
  },
  {
    title: "Publishers",
    basePath: "/publishers",
    icon: Store,
  },
];

export function NavStorefronts() {
  const location = useLocation();
  const {
    storefronts,
    currentStorefront,
    setStorefront,
    getStorefrontPath,
  } = useStorefront();

  return (
    <SidebarGroup>
      <StorefrontSelector
        storefronts={storefronts}
        value={currentStorefront}
        onValueChange={setStorefront}
      />
      <SidebarMenu>
        {navItems.map((item) => {
          const fullPath = getStorefrontPath(item.basePath);
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={location.pathname === fullPath}
              >
                <Link to={fullPath}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
