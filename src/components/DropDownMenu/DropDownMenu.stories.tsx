
import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import DropDownMenu from './DropDownMenu';


const meta: Meta<typeof DropDownMenu> = {
    component: DropDownMenu,
    title: "ReactComponentLibrary/DropDownMenu",
    argTypes: {},
  };
  export default meta;
  
  type Story = StoryObj<typeof DropDownMenu>;

export const Primary : Story = (args:any) => <DropDownMenu {...args} />;


Primary.args = {
    items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Empty : Story = (args:any) => <DropDownMenu {...args} />;
Empty.args = {
    items: [],
};