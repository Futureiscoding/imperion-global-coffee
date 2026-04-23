/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#145B3A",
        gold: "#CBAA46",
        beige: "#F5F5DC",
        ink: "#1F2937",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(20, 91, 58, 0.12)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(203,170,70,0.28), transparent 40%), radial-gradient(circle at bottom right, rgba(20,91,58,0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};
