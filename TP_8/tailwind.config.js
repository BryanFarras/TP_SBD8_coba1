/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_sbd1: '#d68359',
        color_sbd2: '#8bfae0',
        color_dmj1: '#f66587',
        color_dmj2: '#2bea8d',
        color_so1: '#8f067a',
        color_so2: '#e77345',
        color_logo1: '#34d7f9',
        custom_bg1: '#242424',
        color_title1: '#1864ab',
        color_title2: '#00ffff'
      },
      fontSize: {
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.82rem',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
