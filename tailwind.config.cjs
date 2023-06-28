/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'box': '0 0 12px 4px rgba(0, 0, 0, 0.1)',
        'box-inner': 'inset 0 0 4px 1px rgba(0, 0, 0, 0.1)',
        'box-inset': 'inset 0 0 4px 1px rgba(0, 0, 0, 0.1), 0 0 12px 8px rgba(255, 255, 255, 0.1)',
      }
    },
    fontFamily: {
      sans: ['Work Sans', 'Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
