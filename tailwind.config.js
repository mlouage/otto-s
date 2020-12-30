module.exports = {
  purge: {
    mode: "layers",
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"]
  },
  theme: {
    extend: {
      colors: {
        primary: "#0068A8",
        secondary: "#2FB1CB",
        tertiary: "#195A6C",
      },
      fontFamily: {
        body: ["Rokkitt"],
      },
    },
  },
  variants: {},
  plugins: [],
};
