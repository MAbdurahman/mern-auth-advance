/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',], theme: {
      extend: {
         fontFamily: {
            heading: ['Lora', 'serif'],
            body: ['Montserrat', 'sans-serif'],
            monospace: ['Noto Sans Mono', 'monospace']
         }, colors: {
            'augmented-000': 'hsl(210, 12%, 98%)',
            'augmented-100': 'hsl(210, 12%, 88%)',
            'augmented-200': 'hsl(210, 12%, 78%)',
            'augmented-300': 'hsl(210, 15%, 68%)',
            'augmented-400': 'hsl(210, 15%, 58%)',
            'augmented-500': 'hsl(210, 15%, 48%)',
            'augmented-600': 'hsl(210, 15%, 38%)',
            'augmented-700': 'hsl(210, 20%, 28%)',
            'augmented-800': 'hsl(210, 25%, 18%)',
            'augmented-900': 'hsl(210, 30%, 10%)',
            'blue-01-000': 'hsl(204, 51%, 94%)',
            'blue-01-100': 'hsl(204, 51%, 89%)',
            'blue-01-200': 'hsl(204, 51%, 78%)',
            'blue-01-300': 'hsl(204, 51%, 67%)',
            'blue-01-400': 'hsl(204, 51%, 55%)',
            'blue-01-500': 'hsl(204, 64%, 44%)',
            'blue-01-600': 'hsl(204, 64%, 39%)',
            'blue-01-700': 'hsl(204, 64%, 34%)',
            'blue-01-800': 'hsl(204, 64%, 28%)',
            'blue-01-900': 'hsl(204, 64%, 23%)',
            'neutral-000': 'hsl(210, 0%, 98%)',
            'neutral-100': 'hsl(210, 0%, 88%)',
            'neutral-200': 'hsl(210, 0%, 78%)',
            'neutral-300': 'hsl(210, 0%, 68%)',
            'neutral-400': 'hsl(210, 0%, 58%)',
            'neutral-500': 'hsl(210, 0%, 48%)',
            'neutral-600': 'hsl(210, 0%, 38%)',
            'neutral-700': 'hsl(210, 0%, 28%)',
            'neutral-800': 'hsl(210, 0%, 18%)',
            'neutral-900': 'hsl(210, 0%, 10%)',
            'semantic-a-400': 'hsl(0, 96%, 33%)',
            'semantic-a-300': 'hsl(0, 96%, 38%)',
            'semantic-a-200': 'hsl(0, 96%, 43%)',
            'semantic-a-100': 'hsl(0, 96%, 48%)',
            'semantic-s-400': 'hsl(100, 96%, 33%)',
            'semantic-s-300': 'hsl(100, 96%, 38%)',
            'semantic-s-200': 'hsl(100, 96%, 43%)',
            'semantic-s-100': 'hsl(100, 96%, 48%)',
            'semantic-w-400': 'hsl(48, 96%, 50%)',
            'semantic-w-300': 'hsl(48, 96%, 55%)',
            'semantic-w-200': 'hsl(48, 96%, 60%)',
            'semantic-w-100': 'hsl(48, 96%, 65%)'
         },
      }, plugins: [],

   }
}