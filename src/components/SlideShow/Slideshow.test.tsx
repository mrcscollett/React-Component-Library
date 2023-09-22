import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slideshow from './Slideshow';
import '@testing-library/jest-dom'

const imageUrls = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

describe('Slideshow component', () => {
  it('renders with initial slide', () => {
    const { getByAltText } = render(<Slideshow images={imageUrls} onPrevious={function (): void {
      throw new Error('Function not implemented.');
    } } onNext={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    const slide = getByAltText('Slide 1');
    expect(slide).toBeInTheDocument();
  });

  it('navigates to the next slide', () => {
    const { getByText, getByAltText } = render(<Slideshow images={imageUrls}/>);
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    const secondSlide = getByAltText('Slide 2');
    expect(secondSlide).toBeInTheDocument();
  });

  it('navigates to the previous slide', () => {
    const { getByText, getByAltText } = render(<Slideshow images={imageUrls} />);
    const prevButton = getByText('Previous');
    fireEvent.click(prevButton);

    const lastSlide = getByAltText('Slide 3');
    expect(lastSlide).toBeInTheDocument();
  });
});
