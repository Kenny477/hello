/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'box': '0 0 12px 4px rgba(0, 0, 0, 0.1)',
      }
    },
    fontFamily: {
      sans: ['Work Sans', 'Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
