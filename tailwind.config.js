module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#2b2b2d',
        'accent-beige': '#f0c6a0'
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
