import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve("src/components/"),
      utils: path.resolve("src/utils/"),
      types: path.resolve("src/types/"),
      routes: path.resolve("src/routes/"),
      store: path.resolve("src/store/"),
      pages: path.resolve("src/pages/"),
      hooks: path.resolve("src/hooks/"),
    },
  },
});
