import React, { useState } from 'react';
import './Slideshow.scss';

interface SlideshowProps {
  images: string[],
  onPrevious?: () => void,
  onNext?: () => void,
}

const Slideshow: React.FC<SlideshowProps> = ({ images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
      <button onClick={goToPrevious} className="nav-button prev-button">
        Previous
      </button>
      <button onClick={goToNext} className="nav-button next-button">
        Next
      </button>
    </div>
  );
};

export default Slideshow;
