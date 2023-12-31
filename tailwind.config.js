/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon: "polygon(0 0, 0% 100%, 100% 100%)",
      },
      backgroundImage: {
        "topics-pattern": "url('/Topics.png')",
      },
      colors: {
        primary: {
          lightYellow: "rgb(184, 242, 28)",
          orange: "rgb(255, 121, 72)",
          darkGreen: "rgb(26, 133, 117)",
          orangeGold: "rgb(248, 189, 73)",
        },
      },
      screens: {
        1024: { max: "1024px" },
        600: { max: "600px" },
      },
    },
  },
};
