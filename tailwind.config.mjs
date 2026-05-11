/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the "src/" prefix
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Note the "src/" prefix
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This maps the CSS variables you added in layout.tsx to Tailwind's 'font-sans'
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
