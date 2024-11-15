/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#39B285',
        secondary: '#007ACC',
        dark: '#2F2F2F',
        light: '#F3F3F3',
        'gray-custom': '#D7D7D7',
        'gray-dark': '#A9A9A9',
        'gray-light': '#D3D3D3',
        danger: '#FF0000',
        warning: '#FFFF00'
      }
    },
  },
  plugins: [],
};