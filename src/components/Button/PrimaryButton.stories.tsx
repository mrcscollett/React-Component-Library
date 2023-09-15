import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  title: "ReactComponentLibrary/PrimaryButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args:any) => (
  <PrimaryButton data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};