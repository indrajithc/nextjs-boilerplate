import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming";
const config = require("../config");

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const { deviceSizes, breakpoints } = config.image || {};

const BREAKPOINTS_INT = {
  xs: breakpoints.xs.maxWidth + 1,
  sm: breakpoints.sm.maxWidth + 1,
  md: breakpoints.md.maxWidth + 1,
  lg: breakpoints.lg.maxWidth + 1,
  xl: deviceSizes[4],
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

const darkTheme = create({ base: "dark" });
const lightTheme = create({
  base: "light",
  // brandImage: logo.darkLogo
});

export const parameters = {
  viewport: { viewports: customViewports },
  layout: "fullscreen",
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
    current: "dark",
  },
};

export default preview;
