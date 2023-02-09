/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
        second: 'Butcherman, cursive'

      },
      colors: {
        first: {
          50: '#db6724',
          100: '#ca5f21',
        },
        text: {
          50: '#c2bfbd',
          100: '#918b88'
        },
        body: {
          50: '#110f0e',
          100: '#131110'
        }
      },
      zIndex: {
        '100': '100',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-15deg) scale(.7)', opacity: '.2' },
          '50%': { transform: 'rotate(-15deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(-15deg) scale(.7)', opacity: '.2' },
        },
        wiggle2: {
          '0%': { transform: 'rotate(15deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(15deg) scale(.7)', opacity: '.2' },
          '100%': { transform: 'rotate(15deg) scale(1)', opacity: '1' },
        },
      }
    },
    screens: {
      'xs': '440px',
      // => @media (min-width: 440px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}