const fetch = require("node-fetch");

const encoded = (path) => path !== decodeURIComponent(path || "");

const encode = (path) => encodeURIComponent(path);

const decode = (path) => {
  let nextPath = path;

  while (encoded(nextPath)) {
    nextPath = decodeURIComponent(nextPath);
  }

  return nextPath;
};

const trimLeadingSlash = (path) => path.replace(/^\/+/, "");

const trimTrailingSlash = (path) => path.replace(/\/+$/, "");

module.exports = {
  async revalidate(path) {
    return;
    // const nextPath = encode(trimLeadingSlash(decode(path)));
    // const appUrl = trimTrailingSlash(process.env.APP_URL);

    // try {
    //   await fetch(`${appUrl}/${nextPath}`);
    // } catch (err) {
    //   console.error(err);
    // }
  },
};
