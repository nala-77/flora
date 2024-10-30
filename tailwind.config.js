/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        15: "15px",
        17: "69px",
        60: "60px",
        70: "5.12%",
        22: "90px",
        34: "135px",
        38: "38px",
        13: "50px",
        58: "58px",
        122: "122px",
        32: "132px",
        90: "380px",
        30: "30px",
        2.6: "26%"
      },
      lineHeight: {
        80: "80px",
      },
      colors: {
        "main-color": "#025595",
        "main-bg": "#D7E6EA",
      },
      screens: {
        950: "950px",
        750: "750px",
        500: "500px",
        721: "721px"
      },
      fontSize: {
        39: "39px",
        44: "44px",
        29: "29px",
        15: "15px",
        22: "22px",
        13: "13px",
        70: "70px",
      },
      grayscale: {
        50: "50%",
      },
      borderRadius: {
        10: "10px",
      },
       boxShadow: {
        '3xl': '0px 0px 10px 0px rgba(0, 0, 0, 0.102)',
      }
    },
  },
  plugins: [],
};
