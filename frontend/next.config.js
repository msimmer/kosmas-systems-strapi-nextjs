const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withCSS({
    env: {
      API_URL: process.env.API_URL,
    },
  })
);
