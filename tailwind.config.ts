import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    dark: {
      background: '#121212',
      text: '#fff'
    },
    light: {
      background: '#fff',
      text: '#000'
    }
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
