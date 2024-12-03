module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct for your project
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
