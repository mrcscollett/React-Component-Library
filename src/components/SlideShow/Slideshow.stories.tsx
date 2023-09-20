import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Slideshow from './Slideshow';


const meta: Meta<typeof Slideshow> = {
    component: Slideshow,
    title: "ReactComponentLibrary/Slideshow",
    argTypes: {},
  };
  export default meta;
  
  type Story = StoryObj<typeof Slideshow>;

const images = [ "image1.jpg","image2.jpg", "image3.jpg" ];
const interval = 3000;

export const Primary: Story = (args : any) => <Slideshow {...args} />;

//export const Default = Template.bind({});
Primary.args = {
  images,
  interval
};
