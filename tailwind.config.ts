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
      "parallex": "url('') "
      // Add your custom theme settings
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};

export default config;
