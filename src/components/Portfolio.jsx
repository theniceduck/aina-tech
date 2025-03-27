import React, { useState } from 'react'
import styles, { layout } from '../style'
import { arrowUp, portfolio1, portfolio2, portfolio3 } from '../assets'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const portfolioItems = [
    {
      type: 'image',
      src: portfolio1,
      alt: 'Web Development Project',
      title: 'Web Development Project',
      description: 'A modern e-commerce platform built with React and Node.js, featuring responsive design and seamless user experience.'
    },
    {
      type: 'video',
      src: portfolio2,
      alt: 'Mobile App Demo',
      title: 'Mobile App Development',
      description: 'Interactive demo of our cross-platform mobile application, showcasing smooth animations and intuitive user interface.'
    },
    {
      type: 'gif',
      src: portfolio3,
      alt: 'UI/UX Animation',
      title: 'UI/UX Design Process',
      description: 'A glimpse into our design process, demonstrating how we transform concepts into engaging user experiences.'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const renderMedia = () => {
    const item = portfolioItems[currentIndex];
    
    switch (item.type) {
      case 'video':
        return (
          <video
            key={item.src}
            src={item.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        );
      case 'gif':
      case 'image':
      default:
        return (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        );
    }
  };

  return (
    <section id='portfolio' className={`${layout.section} flex flex-col items-center`}>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-center items-center mb-16 w-full">
          <h2 className={`${styles.heading2} text-center`}>Explore Our Portfolio</h2>
        </div>
        <div className={`${layout.sectionImg} relative w-full`}>
          <div className="w-full h-[600px] bg-black-gradient rounded-[20px] overflow-hidden relative">
            {renderMedia()}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
              <h3 className="text-white font-poppins font-semibold text-[24px] mb-2">
                {portfolioItems[currentIndex].title}
              </h3>
              <p className="text-dimWhite font-poppins text-[16px]">
                {portfolioItems[currentIndex].description}
              </p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-[40px] h-[40px] rounded-full bg-blue-gradient flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={arrowUp}
                alt="Previous"
                className="w-[20px] h-[20px] rotate-180"
              />
            </button>
            <span className="text-white font-poppins text-[16px]">
              {currentIndex + 1} / {portfolioItems.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-[40px] h-[40px] rounded-full bg-blue-gradient flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={arrowUp}
                alt="Next"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
