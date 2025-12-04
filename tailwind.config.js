/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#8b5cf6",
          indigo: "#6366f1",
        },
      },
      boxShadow: {
        "brand-glow": "0 25px 80px rgba(76, 81, 191, 0.35)",
      },
    },
    fontFamily: {
      sans: [
        '"Noto Sans KR"',
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "sans-serif",
      ],
    },
  },
  plugins: [],
};

export default config;
