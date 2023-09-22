import React from 'react';

import { action } from '@storybook/addon-actions';
import Slideshow from './Slideshow';
import { Meta } from '@storybook/react';


const imageUrls = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR2iFAm3R3DnGgPrLwOFLtFXuUZKbzcEHjl7uFPLJ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYUfjUhlXriSZAD6lGKNvX7umGPoysbdWZMDUL5jQ-Q&s']

const meta: Meta<typeof Slideshow> = {
  component: Slideshow,
  title: "ReactComponentLibrary/Slideshow",
  argTypes: {},
};
export default meta;

export const Default = () => (
  <Slideshow
    images={imageUrls}
    onPrevious={action('Previous clicked')}
    onNext={action('Next clicked')}
  />
);