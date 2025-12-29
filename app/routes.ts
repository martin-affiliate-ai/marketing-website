import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(":slug", "routes/post.tsx"),
  route("policies/:policy", "routes/policies.$policy.tsx"),
] satisfies RouteConfig;
