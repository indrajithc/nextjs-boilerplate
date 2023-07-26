import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import SampleWidgetTwoContainer from "@widgets/SampleWidgetTwo/SampleWidgetTwoContainer";

const meta = {
  title: "Widgets/SampleWidgetTwo",
  component: SampleWidgetTwoContainer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SampleWidgetTwoContainer>;

export default meta;
type Story = StoryObj<typeof SampleWidgetTwoContainer>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
