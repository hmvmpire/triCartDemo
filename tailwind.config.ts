import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        background: "var(--background)",
        foreground: "var(--foreground)",
        fashionPrimary: {
          DEFAULT: "oklch(0.554 0.046 257.417)",
          HOVER: "oklch(0.446 0.03 256.802)",
          LIGHT: "oklch(0.968 0.007 247.896)",
          MED_LIGHT: "oklch(0.929 0.013 255.508)",
        },
        ELECTRONICS_PRIMARY: {
          DEFAULT: "oklch(0.705 0.213 47.604)",
          HOVER: "oklch(0.646 0.222 41.116)",
          LIGHT: "oklch(0.954 0.038 75.164)",
        },
        TOOLS_PRIMARY: {
          DEFAULT: "oklch(0.852 0.199 91.936)",
          HOVER: "oklch(0.795 0.184 86.047)",
          LIGHT: "oklch(0.973 0.071 103.193)",
        },
        DECOR_PRIMARY: {
          DEFAULT: "oklch(0.37 0.013 285.805)",
          HOVER: "black",
          LIGHT: "oklch(0.967 0.001 286.375)",
        },
      },
    },
  },
  plugins: [],
};

export default config;