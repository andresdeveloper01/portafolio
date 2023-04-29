/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(auto-fill, minmax(280px,1fr))'
      }
    }
  },
  plugins: []
}
