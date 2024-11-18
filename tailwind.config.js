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
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideDown: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideRight: {
        '0%': { transform: 'translateX(-20px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideLeft: {
        '0%': { transform: 'translateX(20px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      scaleIn: {
        '0%': { transform: 'scale(0.8)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-out',
      slideDown: 'slideDown 0.5s ease-out',
      slideRight: 'slideRight 0.5s ease-out',
      slideLeft: 'slideLeft 0.5s ease-out',
      scaleIn: 'scaleIn 0.5s ease-out',
    },
  },
  plugins: [],
};