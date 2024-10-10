/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily  : {
        'IBM' : ["IBM Plex Mono", "monospace"],
        'jetbrains' : ["JetBrains Mono", "monospace"],
        'jersey' : ["Jersey 25", "sans-serif"]
      }
    },
  },
  plugins: [],
}

