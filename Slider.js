import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const images  = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/9f0c5ba1d8d181df8d07760c77cc7ffd',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/71a1a892aba05e349d776a8ef9686b39',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/d1e94c7f0235deb8261b15ef4ffd9662',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/feb9c75cff7882a4f86152e6e2fe29cd',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/e96601812d849fdc98f7ef5abc7f3ed6',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/99e197d26d8936c3f8c4fe959260ddee',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/afc97635943a16ecff63cc797f343b66',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504//rng/md/carousel/production/6d7276d43a63da2cf051c014039ebf5b',
  ];

const Slider = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const slidesToShow = isDesktopOrLaptop ? 3 : isTablet ? 2 : 1;
    const nextSlide = () => {
        setCurrent(current === length - slidesToShow ? current : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? current : current - 1);
    };

  return (
    <section className="flex items-center justify-center overflow-x-hidden">
      <button className={`p-4 ${current === 0 ? 'bg-gray-300' : 'bg-blue-500'}`} onClick={prevSlide} disabled={current === 0}>Prev</button>
      {images.map((image, index) => (
        <div className={(index >= current && index < current + slidesToShow) ? 'block' : 'hidden'} key={index}>
          <img src={image} alt="slide" className="w-64 h-64 mx-4" />
        </div>
      ))}
      <button className={`p-4 ${current === length - slidesToShow ? 'bg-gray-300' : 'bg-blue-500'}`} onClick={nextSlide} disabled={current === length - slidesToShow}>Next</button>
    </section>
  );
}

export default Slider