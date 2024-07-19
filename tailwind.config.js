/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./formkit.theme.ts" // <-- add your theme file
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

