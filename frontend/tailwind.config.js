// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "red": "#ff0000",
        "green": "#00ff00",
        "blue": "#0000ff",
        "yellow": "#ffff00",
        "white": "#ffffff",
        "black": "#000000",
        "gray": "#808080",
        "orange": "#ffa500",
        "purple": "#800080",
        "pink": "#ffc0cb",
        "brown": "#a52a2a",
      }
    },
  },
  daisyui: {
    themes:
      [
        "lemonade", "night"
      ]
  },
  plugins: [require('daisyui')],
}

