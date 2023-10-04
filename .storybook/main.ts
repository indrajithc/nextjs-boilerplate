import type { StorybookConfig } from "@storybook/nextjs";
import tsconfig from "../tsconfig.json";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    const alias = {};
    Object.keys(tsconfig.compilerOptions.paths).forEach((key) => {
      alias[key.replace("/*", "")] = path.resolve(__dirname, "../", tsconfig.compilerOptions.paths[key][0].replace("*", ""));
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config?.resolve?.alias,
        ...alias,
      },
      fallback: {
        ...(config.resolve || {}).fallback,
        fs: false,
        stream: false,
        os: false,
      },
    };
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
