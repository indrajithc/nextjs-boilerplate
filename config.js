const env = process.env.ENVIRONMENT || "local";
const isProduction = process.env.NODE_ENV === "production";

const defaultConfig = require("./config/default.json");

/** server system configs */
const rootDir = __dirname;

/** configuration specific constants */
const { defaultLocale, locales, image } = defaultConfig || {};

module.exports = {
  env,
  isProduction,
  rootDir,
  defaultLocale,
  locales,
  image,
};
