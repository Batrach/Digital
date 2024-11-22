/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      margin: {
        '30': '7.5rem',
        '25': '100px', 
      },
      padding:{
        '24': "5rem",
        '29':"6.25rem",
      },
      borderRadius: {
        '28': '6.125rem',
      },
      colors: {
        'diamond': '#00F0FF',
        'custom-placeholder': '#6D6868',
        'primory': '#275742'
      },
      maxWidth: {
        '412': '412px', 
        '607': '607px',
      },
      fontFamily:{
        'minecraft': ['maincraft']
      },
      screens: {
        'xs': '480px', 
      },
    },
  },
  plugins: [],
}