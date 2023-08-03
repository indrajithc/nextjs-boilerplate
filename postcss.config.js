module.exports = {
  plugins: [
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
      {
        content: ["./src/**/*.{js,jsx,ts,tsx}"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body", "img"],
          deep: [
            // whitelist all CSS classes that start
            // with "mt-" and "mb-"
            // /^ms-/,
            // /^mb-/,
            // whitelist the "highlighted" class
            "highlighted",
          ],
        },
      },
    ],
    "postcss-preset-env",
    "postcss-nested",
  ],
};
