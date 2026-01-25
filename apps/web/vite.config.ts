import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" }, inspectorPort: 9229 }),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
	server: {
		host: 'affiliate-ai.local',
		port: 5173,
	},
	//ssr: {
    //	noExternal: ['posthog-js', '@posthog/react']
  	//},
  	resolve: {
		alias: {
			"~": "/app",
		},
	},
});
