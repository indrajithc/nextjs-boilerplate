import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  viewportWidth: 1360,
  viewportHeight: 768,
  e2e: {
    baseUrl: "http://localhost:9009",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@mocks": path.resolve(__dirname, "./__mocks__"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@components": path.resolve(__dirname, "./src/components/common"),
            "@skeletons": path.resolve(__dirname, "./src/components/skeleton"),
            "@context": path.resolve(__dirname, "./src/components/context"),
            "@hooks": path.resolve(__dirname, "./src/components/hooks"),
            "@core": path.resolve(__dirname, "./src/components/core"),
            "@i18n": path.resolve(__dirname, "./src/i18n"),
            "@app": path.resolve(__dirname, "./src"),
          },
        },
      },
    },
  },
});
