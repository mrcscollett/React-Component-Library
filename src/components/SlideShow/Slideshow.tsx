import React, {useState, useEffect} from 'react';
import "./Slideshow.scss"

interface SlideshowProps {
    images: string[],
    interval?: number

}

const Slideshow: React.FC<SlideshowProps> = ({images, interval=3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex+1) % images.length)
        }, interval);
        return clearInterval(timer);
    }, [images, interval] )

    return (
        <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
    )
}

export default Slideshow;