/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // roboto: ["Roboto", "sans-serif"],
        // robotoSlab: ["Roboto Slab", "serif"],
        // seaweed: ["Seaweed Script", "cursive"],
        leageSpartan: ["League Spartan", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            image: {
              margin: "0 auto",
              borderColor: theme("colors.white"),
              borderWidth: "2rem",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            h2: {
              marginTop: "1.5em",
              marginBottom: "0.5em",
              color: theme("colors.red.500"),
              borderBottomWidth: "1px",
              borderColor: theme("colors.red.500"),
            },
            h3: {
              marginTop: "1.5em",
              marginBottom: "0.5em",
              color: theme("colors.gray.600"),
            },
            ul: {
              marginTop: "0.75em",
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
            p: {
              marginTop: "1em",
              marginBottom: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
