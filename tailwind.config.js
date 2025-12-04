/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#040619",
          subtle: "#060a1f",
          card: "#0b1022",
          border: "rgba(148,163,184,0.18)",
        },
        accent: {
          violet: "#8b5cf6",
          indigo: "#6366f1",
        },
      },
      boxShadow: {
        panel: "0 30px 90px rgba(3,7,18,0.55)",
        card: "0 20px 60px rgba(2,6,23,0.35)",
      },
      backgroundImage: {
        "canvas-gradient":
          "radial-gradient(circle at top, rgba(99,102,241,0.22), transparent 45%), radial-gradient(circle at 20% 20%, rgba(14,165,233,0.15), transparent 40%)",
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.4rem",
      },
      fontSize: {
        hero: "clamp(2.5rem, 5vw, 4rem)",
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
