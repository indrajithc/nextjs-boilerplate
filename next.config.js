/** @type {import('next').NextConfig} */

const config = require("./config");

const { domains, deviceSizes } = config.image || {};

const serverRuntimeConfig = {
  ENVIRONMENT: config.env,
  APP_API_HOST: config.appApiHost,
  DISABLE_CONSTRUCT_API_URL: config.disableConstructApiUrl,
  APP_API_PROTOCOL: config.appApiProtocol,
  SITE_NAME_SEPARATOR: config.siteNameSeparator,
};

const nextConfig = {
  /* config options here */
  images: {
    ...(domains ? { domains } : {}),
    // ...(imageSizes ? ({ imageSizes }) : {}),
    ...(deviceSizes ? { deviceSizes } : {}),
    loader: "default",
  },
  serverRuntimeConfig,
};

module.exports = nextConfig;

// Don't delete this console log, useful to see the commerce config in site deployments
if (config.isProduction) {
  console.info("next.config.js", JSON.stringify(module.exports, null, 2));
}
