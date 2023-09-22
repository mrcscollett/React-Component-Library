// src/stories/NavigationBar.stories.tsx
import React from 'react';
import NavBar from './NavBar';
import { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof NavBar> = {
    component: NavBar,
    title: "ReactComponentLibrary/NavBar",
    argTypes: {},
  };
  export default meta;
  
  type Story = StoryObj<typeof NavBar>;

export const Template : Story = (args:any) => <NavBar {...args} />;


Template.args = {
  items: ['Home', 'About', 'Contact'],
};
