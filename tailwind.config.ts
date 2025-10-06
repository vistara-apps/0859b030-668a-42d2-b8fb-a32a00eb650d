import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        positive: "var(--color-positive)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        subtext: "var(--color-subtext)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 8px 24px hsla(220,20%,2%,0.24)",
        elevated: "0 12px 40px hsla(220,20%,2%,0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
