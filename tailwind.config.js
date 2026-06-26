/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        carbon: "#181614",
        ember: "#f97316",
        flame: "#ffb000",
        porcelain: "#f8f7f4",
        mist: "#e9e5de",
        copper: "#9b4a1f",
        pine: "#16483f",
        signal: "#d83a1e"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        sharp: "0 18px 60px rgba(16, 16, 16, 0.12)"
      }
    }
  },
  plugins: []
};
