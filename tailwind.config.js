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
        "gradient-footer":
          "linear-gradient(263.6deg, #151515 10.15%, rgba(31, 31, 31, 0.8) 102%)",
        "gradient-border":
          " linear-gradient(91.43deg, rgba(255, 255, 255, 0.3) -1.05%, rgba(255, 255, 255, 0) 63.51%, rgba(255, 255, 255, 0.3) 120.48%)",
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
          dot: "#394452",
          green: "#35C435",
          "footer-btn": "#3C3C3C",
          qa: "#F0F2F5",
          qadesc: "#444C58BF",
          check: "#2FF3E0",
          wa: "#25D366",
          glass: "#2C323E4D",
          input: "#A5ABB3",
          internshipText: "#BE9E00",
          internship: "#FFF39B",
          partTimeText: "#35C435",
          partTime: "#C3F9B0",
          fullTimeText: "#FF3E30",
          fullTime: "#FFC6AC",
          strip: "#EEF0F2",
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
