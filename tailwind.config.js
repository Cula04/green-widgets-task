/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        dirtyWhite: '#f0f0f0',
        greenLC: '#00ff00',
        blueLC: '#0000ff',
        beigeLC: '#f5f5dc',
        blackLC: '#000000'
      }
    }
  },
  plugins: []
}
