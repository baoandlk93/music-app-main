/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#196eed",
        "warning": "#f3c848",
        "info": "#00dee3",
        "danger": "#E72412",
        "dark": "#151719",
        "light": "#F5F7FA",
        "secondary": "#737578",
        "from-gradient": "rgba(255, 255, 255, 0.15)",
        "to-gradient": "rgba(255, 255, 255, 0)",
        "body-color": "#57595b",
        "bg-sidebar": "#f5f7fa",
        "on-sidebar": "#323334",
        "color-text": "#323334"
      },
      fontFamily: {
        "body-font-family": "Open Sans,sans-serif",
        "roboto": '"Roboto Slab",serif'
      },
      gradientColorStopPositions: {
        0: "0"
      },
      screens: {
        "xs": "480px"
      },
      backgroundImage: {
        "hero": "url('/images/home.jpg')",
        "artist-hero": "url('/images/bg-artist.jpg')",
        "song-hero": "url('/images/bg-song.jpg')",
        "footer": "url('/images/footer.jpg')"
      }
    },
  },
  plugins: [],
}