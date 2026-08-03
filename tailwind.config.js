/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./privacy-policy.html",
    "./terms-and-conditions.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: '#000319',
        cardBg: 'rgba(10, 16, 38, 0.7)',
        accentCyan: '#00f2fe',
        accentBlue: '#4facfe',
        accentPurple: '#7f00ff',
        accentMagenta: '#e100ff',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
