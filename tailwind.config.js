module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        darkblue: "#002d62"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
