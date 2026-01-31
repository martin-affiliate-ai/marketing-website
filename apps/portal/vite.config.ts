import fs from "node:fs";
import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const certPath = path.resolve(__dirname, "../../.certs/affiliate-ai.local+4.pem");
const keyPath = path.resolve(__dirname, "../../.certs/affiliate-ai.local+4-key.pem");

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
		https: fs.existsSync(certPath) ? {
			cert: fs.readFileSync(certPath),
			key: fs.readFileSync(keyPath),
		} : undefined,
	},
	resolve: {
		alias: {
			"~": "/app",
		},
	},
});
