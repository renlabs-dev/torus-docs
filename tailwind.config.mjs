import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#ff9852", // Orange for dark mode
  600: "#e85d14", // Medium orange
  900: "#e04600", // Primary orange (D3 style)
  950: "#b83a00", // Darker orange
};
const gray = {
  100: "#f5f6f8",
  200: "#eceef2",
  300: "#c0c2c7",
  400: "#888b96",
  500: "#545861",
  700: "#353841",
  800: "#222226",
  900: "#131316",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { 
        accent, 
        gray,
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#e04600", // D3 primary orange
          950: "#b83a00",
        },
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#ff9852", // D3 dark mode orange
          300: "#ef7234",
          400: "#e85d14",
          500: "#e04600", // D3 primary orange
          600: "#c2410c",
          700: "#9a3412",
          800: "#7c2d12",
          900: "#431407",
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"avenir next"', 'avenir', 'helvetica', '"helvetica neue"', 'ubuntu', 'roboto', 'noto', '"segoe ui"', 'arial', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [starlightPlugin()],
};
