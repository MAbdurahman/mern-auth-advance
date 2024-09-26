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
      colors: {
        'blue-01-000': 'hsl(204, 51%, 94%)',
        'blue-01-100': 'hsl(204, 51%, 89%)',
        'blue-01-200': 'hsl(204, 51%, 78%)',
        'blue-01-300': 'hsl(204, 51%, 67%)',
        'blue-01-400': 'hsl(204, 51%, 55%)',
        'blue-01-500': 'hsl(204, 64%, 44%)',
        'blue-01-600': 'hsl(204, 64%, 39%)',
        'blue-01-700': 'hsl(204, 64%, 34%)',
        'blue-01-800': 'hsl(204, 64%, 28%)',
        'blue-01-900': 'hsl(204, 64%, 23%)'
      },
    },
    plugins: [],

  }
}