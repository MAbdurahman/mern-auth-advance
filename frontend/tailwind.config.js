/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        monospace: ['Noto Sans Mono', 'monospace']
      },
    },
    plugins: [],

  }
}