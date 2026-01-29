/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 1. यहाँ Meteors के लिए एनीमेशन डिफाइन किया गया है
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      // 2. यहाँ एनीमेशन का व्यवहार (Behavior) बताया गया है
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}
