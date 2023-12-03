/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon: "polygon(0 0, 0% 100%, 100% 100%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/Baku_Youth_Dialogue_Hero.png')",
        "negotiations-pattern": "url('/Baku_Youth_Dialogue_Negotiations.png')",
        "left-side-bar-pattern": "url('/Left_SideBar_Pattern.png')",
      },
      colors: {
        primary: {
          lightYellow: "rgb(184, 242, 28)",
          orange: "rgb(255, 121, 72)",
          darkGreen: "rgb(26, 133, 117)",
          orangeGold: "rgb(248, 189, 73)",
        },
      },
    },
  },
  plugins: [],
};
