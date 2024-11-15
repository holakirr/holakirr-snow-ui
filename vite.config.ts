import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			// rollupTypes: true,
		}),
		react(),
		tsconfigPaths(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "./lib/main.ts"),
			name: "holakirr-snow-ui",
			fileName: "holakirr-snow-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "jsxRuntime",
				},
			},
		},
	},
});
