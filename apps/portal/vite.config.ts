import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" }, inspectorPort: 9231 }),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
	server: {
		host: 'portal.affiliate-ai.local',
		port: 5175,
	},
	resolve: {
		alias: {
			"~": "/app",
		},
	},
});
