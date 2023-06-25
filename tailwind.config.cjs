/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
      MyFont: ['"Epilouge"', 'serif'],
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#28293E',
          main: '#FDF0E9',
          secondary: '#FDF0E9',

          accent: '#1fb2a6',

          neutral: '#2a323c',

          'base-100': '#1d232a',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
