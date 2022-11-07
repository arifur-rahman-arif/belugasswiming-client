/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  autoprefixer: {},
  theme: {
      extend: {
        colors: {
          primary: '#FFE202',
          secondary: '#3A3A3A',
          primary20: '#FFF9CC',
          blue: '#5FA1D5',
          blue20: '#ECF6FF',
          green: '#51B960',
          green20: '#EAF8EC',
          red: '#FE8668',
          orange: '#FDBC1F',
          teal: '#30D6B0',
          indigo: '#4269F2',
          main: '#000000',
          grey80: '#000000',
          grey60: '#A6A6AA',
          grey40: '#CBCBD4',
          grey20: '#F8F7FA',
        },
      }
  },
  plugins: []
};
