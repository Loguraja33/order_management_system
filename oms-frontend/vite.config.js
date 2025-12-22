import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // important
    environment: "jsdom",   // simulate browser
    setupFiles: "./src/test/setup.js",
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // redirect API calls to backend
    },
  },
});
