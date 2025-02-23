// import type { Config } from 'tailwindcss';
import type { Config } from 'tailwindcss';
import prelinePlugin from 'preline/plugin';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [prelinePlugin], // ❌ Removed postcssNesting
};

export default config;
