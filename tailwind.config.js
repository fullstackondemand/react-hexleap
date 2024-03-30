/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    // Define Screen Resolution
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    extend: {},
  },
  plugins: [],

  corePlugins: {
    filter: false,

    // Define Opacity 
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,

  }
}