/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#BB86FC',
        'brand-black': '#121212',
        'card-background': '#1E1E1E',
        'gold-accent': '#FFD54F',
        'secondary-text': '#B3B3B3',

      },
    },
  },
  plugins: [],
}