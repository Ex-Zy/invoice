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
        'primary-success': '#33D69F',
        'primary-pending': '#FF8F00',
        'primary-draft': '#373B53',
        'primary-purple': '#7c5dfa',
        'primary-purple-light': '#9277ff',
        onyx: '#0c0e16',
        dark: '#1e2139',
        denim: '#252945',
        'primary-silver': '#DFE3FA',
        'primary-gray': '#888EB0',
        'primary-stone': '#7E88C3',
        orange: '#EC5757',
        'orange-light': '#FF9797',
        light: '#F8F8FB',
        metal: '#141625',
        slate: '#373B53',
      },
      fontSize: {
        small: '15px',
        medium: '24px',
        large: '36px',
        body: '13px',
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
