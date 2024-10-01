/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        duckYellow: '#FCD34D', // Duck feathers
        duckOrange: '#FB923C', // Duck beak/feet
        duckBlue: '#60A5FA', // Water
        duckDarkBlue: '#1E3A8A', // Darker water tone
        duckWhite: '#FFFFFF', // Feathers or background contrast
        duckBackground: '#015c80', // Replace with your desired blue color
        duckYellow: '#FBBF24', 
      },
      fontFamily: {
        ducky: ['"Comic Sans MS"', 'sans-serif'], // Fun playful font
      },
    },
  },
  plugins: [],
}
