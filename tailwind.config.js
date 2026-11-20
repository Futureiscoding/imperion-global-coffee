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
        forest: "#0E4F36",
        darkgreen: "#092F23",
        leaf: "#2E6B4F",
        gold: "#D4AF37",
        goldtext: "#715509",
        goldlight: "#E8CC70",
        mist: "#E5EDE7",
        ivory: "#FBF8F0",
        beige: "#F3EEDC",
        ink: "#1E211C",
        stone: "#5A625B",
        cherry: "#A3322B",
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Georgia"', 'serif'],
        sans: ['"Inter"', '"Segoe UI"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
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
