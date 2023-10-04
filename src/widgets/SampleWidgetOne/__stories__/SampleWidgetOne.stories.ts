import type { Meta, StoryObj } from "@storybook/react";
import SampleWidgetOne from "@widgets/SampleWidgetOne/SampleWidgetOne";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Widgets/SampleWidgetOne",
  component: SampleWidgetOne,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof SampleWidgetOne>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "SampleWidgetOne",
  },
};

export const Secondary: Story = {
  args: {
    label: "SampleWidgetOne",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "SampleWidgetOne",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "SampleWidgetOne",
  },
};
