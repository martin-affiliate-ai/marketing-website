import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("for-advertisers", "routes/for-advertisers.tsx"),
  route("for-publishers", "routes/for-publishers.tsx"),
  route(":slug", "routes/post.tsx"),
  route("policies/:policy", "routes/policies.$policy.tsx"),
] satisfies RouteConfig;
