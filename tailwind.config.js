/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "black",
      {
        putih: {

          "primary": "#111",

          "primary-content": "#e5e7eb",

          "secondary": "#fff",

          "secondary-content": "#161616",

          "accent": "#701a75",

          "accent-content": "#fff",

          "neutral": "#e5e7eb",

          "neutral-content": "#121313",

          "base-100": "#e5e7eb",

          "base-200": "#c7c9cc",

          "base-300": "#aaabae",

          "base-content": "#121313",

          "info": "#6b7280",

          "info-content": "#f3f4f6",

          "success": "#059669",

          "success-content": "#f3f4f6",

          "warning": "#dc2626",

          "warning-content": "#f3f4f6",

          "error": "#991b1b",

          "error-content": "#f3f4f6",
        },
      }, {
        hitam: {
          "primary": "#e5e7eb",

          "primary-content": "#111",

          "secondary": "#161616",

          "secondary-content": "#fff",

          "accent": "#701a75",

          "accent-content": "#fff",

          "neutral": "#111",

          "neutral-content": "#e5e7eb",

          "base-100": "#111",

          "base-200": "#303132",

          "base-300": "#4f5052",

          "base-content": "#e5e7eb",

          "info": "#6b7280",

          "info-content": "#f3f4f6",

          "success": "#059669",

          "success-content": "#f3f4f6",

          "warning": "#dc2626",

          "warning-content": "#f3f4f6",

          "error": "#991b1b",

          "error-content": "#f3f4f6",
        },
      },
    ],
  },
}

