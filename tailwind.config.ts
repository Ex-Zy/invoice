import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
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
        slate: '#373B53',
      },
      fontSize: {
        sm: '1.5rem',
        base: '2.4rem',
        xl: '3.6rem',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-1px',
        tighter: '-0.75px',
        tight: '-0.1px',
        normal: '-0.25px',
      },
    },
  },
  plugins: [],
}
