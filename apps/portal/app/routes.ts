import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/app-shell.tsx", [
    route("reporting", "routes/reporting.tsx"),
    route("storefronts/:storefront/overview", "routes/storefronts/overview.tsx"),
    route("storefronts/:storefront/campaigns", "routes/storefronts/campaigns.tsx"),
    route("storefronts/:storefront/publishers", "routes/storefronts/publishers.tsx"),
    route("settings/general", "routes/settings/general.tsx"),
    route("settings/api", "routes/settings/api.tsx"),
    route("settings/team", "routes/settings/team.tsx"),
    route("settings/limits", "routes/settings/limits.tsx"),
  ]),
] satisfies RouteConfig;
