/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  //   container: {
  //     padding:{
  //         DEFAULT: '15px',
  //     }
  // },
  // screens: {
  //     sm:'400px',
  //     md:'650px',
  //     lg:'800px',
  //     xl:'1400px',
  // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'f1': '#ffffff',
      'f2': '#3f3cbb',
      'f3': '#121063',
      'f4': '#565584',
      'f5': '#3ab7bf',
      'f6': '#ecebff',
      'f7': '#ff77e9',
      'f8': '#78dcca',
      'f9': 'black',
      'rg': '#382a1a86',
    extend: {},
    
  },
  
    
  plugins: [],
}
}

