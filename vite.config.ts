import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", // ← 원래 'dist' 였다면 이 줄만 추가/수정
  },
});
