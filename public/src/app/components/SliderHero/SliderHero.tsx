'use client'
import React, { useState } from 'react';
import './SliderHero.css';
import Image from 'next/image';
import slide1 from '../../../../public/img/hero/matte2021b 1.jpg'
import slide2 from '../../../../public/img/hero/slide2.jpg'
import { useMediaQuery } from 'react-responsive';
import { useSwipeable } from 'react-swipeable';

export const SliderHero = () => {

  const is450px = useMediaQuery({maxWidth: 450})

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { img: slide1, img450px: slide2, link: '/'},
    { img: slide1, img450px: slide2, link: '/'},
    { img: slide1, img450px: slide2, link: '/'},
    { img: slide1, img450px: slide2, link: '/'},
    { img: slide1, img450px: slide2, link: '/'}
  ];

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
  });

  return (
    <div className='sliderContainer'>
      <div className='slider' {...handlers}>
        {slides.map((slide, index) => (
          <a 
          
            href={slide.link}
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image 
              
              src={is450px ? slide.img450px : slide.img}
              alt=''
              layout="responsive"
              style={{maxHeight: "400px",
              maxWidth:'910px'}}
            />
          </a>
        ))}
      </div>
      <div className='pagination'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};