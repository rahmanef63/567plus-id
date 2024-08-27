import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',   // Pastikan path ini benar
    './components/**/*.{ts,tsx}',  // Pastikan path ini benar
    './app/**/*.{ts,tsx}',   // Pastikan path ini benar
    './src/**/*.{ts,tsx}',   // Pastikan path ini benar
  ],
  theme: {
    extend: {
      "parallex": "url('') ",
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      background: '#1a202c',
      // Add your custom theme settings
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};

export default config;
