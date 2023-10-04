module.exports = {
  plugins: [
    "postcss-preset-env",
    "postcss-nested",
    "postcss-import",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: ["./src/**/*.{js,jsx,ts,tsx}", "./next/**/*.{js,jsx,ts,tsx}"],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ["html", "body", "img"],
          }
        : false,
    ],
  ],
};
