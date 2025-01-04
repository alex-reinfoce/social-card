import { StoryObj, type Meta } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "component/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<Meta<typeof Button>>;

export const Primary: Story = {};
