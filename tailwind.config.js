/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#145B3A",
        darkgreen: "#0E4F36",
        gold: "#D4AF37",
        ivory: "#F7F3EA",
        beige: "#F4F1E8",
        ink: "#1E2A2B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Georgia"', 'serif'],
        sans: ['"Manrope"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(20, 91, 58, 0.12)",
        card: "0 20px 50px rgba(14, 79, 54, 0.12)",
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(212,175,55,0.18), transparent 38%), radial-gradient(circle at bottom right, rgba(20,91,58,0.18), transparent 40%)",
      },
    },
  },
  plugins: [],
};
