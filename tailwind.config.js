/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        eve: {
          white: "#F4F6F9",
          black: "#09101D",
          blue: "#3A85FF",
          gray: "#858C94",
          "light-blue": "#88BEFF",
          "low-gray": "#F4F6F933",
          "key-features": "#444C58",
          "key-features-bg": "#09101D4D",
          "p-latest-project": "#6D7580",
        },
        btn: {
          primary: "#2B3A4B",
          white: "#EBEEF2",
          blue: "#3A85FF",
        },
        border: {
          gray: "#DADEE3",
        },
      },
      height: {
        masonryFull: "35rem",
      },
    },
  },
  plugins: [],
};
