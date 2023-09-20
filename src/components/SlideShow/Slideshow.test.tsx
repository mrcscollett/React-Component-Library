import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Slideshow from './Slideshow';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

describe('Slideshow component', () => {
  test('renders correctly', () => {
    const { container } = render(<Slideshow images={images} />);
    expect(container).toBeInTheDocument();
  });

  test('renders the correct number of images', () => {
    const { container } = render(<Slideshow images={images} />);
    const slideshowImages = container.querySelectorAll('img');
    expect(slideshowImages.length).toBe(images.length);
  });
});
