const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript(
  withFonts(
    withCSS({
      env: {
        API_URL: process.env.API_URL,
      },
    }),
  ),
);
