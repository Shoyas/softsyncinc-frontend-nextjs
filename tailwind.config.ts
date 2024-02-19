import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Montserrat", "sans-serif"],
        // Add more custom font families as needed
      },

      colors: {
        blue: '#0C5ADB',
        blueLight: '#407ebd',
        gray: '#453F41',
        lightGray: '#6B7280',
        gradientBlue: '#0C5ADB',
        gradientGray: '#453F41',
        whiteGray: '#BCBCBC',
        white: '#ffff',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
