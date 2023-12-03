/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#121212",
          "200": "#111",
          "300": "#050505",
          "400": "rgba(0, 0, 0, 0.04)",
          "500": "rgba(0, 0, 0, 0.08)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(0, 0, 0, 0.15)",
          "800": "rgba(0, 0, 0, 0.6)",
          "900": "rgba(0, 0, 0, 0.4)",
          "1000": "rgba(0, 0, 0, 0.1)",
        },
        whitesmoke: {
          "100": "#f6f5f4",
          "200": "#f1efee",
        },
        darkorchid: {
          "100": "#9d34da",
          "200": "#8029b3",
        },
        cornflowerblue: {
          "100": "#1b95e0",
          "200": "#0a85d1",
        },
        lavender: "#f0e1f9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        nanummyeongjo: "NanumMyeongjo",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      "sm-5": "0.84rem",
      xs: "0.75rem",
      base: "1rem",
      "42xl": "3.81rem",
      lg: "1.13rem",
      "26xl": "2.81rem",
      "34xl": "3.31rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
