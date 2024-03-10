/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontSize: {
      sm: '1.5rem',
      base: '2.4rem',
      xl: '3.6rem',
    },
    colors: {
      purple: '#7c5dfa',
      'purple-light': '#9277ff',
      onyx: '#0c0e16',
      dark: '#1e2139',
      denim: '#252945',
      silver: '#DFE3FA',
      gray: '#888EB0',
      stone: '#7E88C3',
      orange: '#EC5757',
      'orange-light': '#FF9797',
      light: '#F8F8FB',
      metal: '#141625',
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
}
