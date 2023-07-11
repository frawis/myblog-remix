import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderWidth: {
        3: "0.1875rem",
      },
      boxShadow: {
        neo: "4px 4px 0px #000000",
      },
      colors: {
        lime: {
          50: "#FDFEEC",
          100: "#FAFDD8",
          200: "#F6FBB2",
          300: "#F1F88B",
          400: "#EDF665",
          500: "#E7F43D",
          600: "#D9E80D",
          700: "#A3AE0A",
          800: "#6D7407",
          900: "#363A03",
          950: "#1B1D02",
        },
      },
      fontFamily: {
        sans: ["Roboto Mono", ...fontFamily.sans],
        display: ["MuseoModerno", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config
