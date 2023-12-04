/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "a-dark": "#14171F",
        "a-pink": "#FFEAFD",
        "a-blue": "#6A57E3",
        "a-light": "#D5DEF2",
      },
    },
  },
  plugins: [],
};
