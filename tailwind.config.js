/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a CSS class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scan all JS/TS files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
