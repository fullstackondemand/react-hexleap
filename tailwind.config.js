/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./*.html"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  darkMode: "class",
  theme: {
    /** Define Screen Resolution */
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      /** Define Custom Colors */
      colors: {
        darkTheme: '#292B32',
        lightTheme: '#F7F7F8',
        alt: "#738FFF",
        alt1: "#525965",
        alt2: "#3B3E47",
        alt3: "#DFDFDF",
        alt4: "#006555",
        alt5: "#222D3A",
        alt6: "#2C9CF0",
        alt7: "#A9ACB2",
        alt8: "#D9D9D9",
        alt9: "#1D1D1F",
        alt10: "#818A97",
      },
      /** Define Custom Font Family */
      fontFamily: {
        inherit: 'inherit',
        default: ['Poppins', 'sans-serif'],
        alt: ['Inter', 'sans-serif']
      },
      /** Define Custom Font Size */
      fontSize: {
        inherit: 'inherit'
      },
      /** Define Custom Line Height */
      lineHeight: {
        inherit: 'inherit'
      }
    },
  },
  corePlugins: {
    filter: false,
    /** Define Opacity */
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    preflight: false,
  }
}