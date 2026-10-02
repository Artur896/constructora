import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#111111",
        carbon2: "#1a1a1a",
        paper: "#FFFFFF",
        architect: "#777777",
        mist: "#EDEDED",
        bronze: "#B89B5E",
        "bronze-dim": "#8f7a49",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
