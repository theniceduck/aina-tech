import React, { useState, useEffect } from 'react'
import styles from '../style'
import { hero1, hero2, hero3, hero4, hero5, hero6 } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3, hero4, hero5, hero6]; // Add more images as needed

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Add custom hook for screen size detection
  const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return screenWidth;
  };
  
  const screenWidth = useScreenSize();
  
  // Determine image position based on screen width
  const getImageLeftPosition = () => {
    if (screenWidth <= 640) {
      return '0px'; // safe for mobile
    } else if (screenWidth <= 1366) {
      return '-70px';
    } else if (screenWidth >= 1920) { // Approximately 20-inch screen and larger
      return '10px';
    } else {
      // For screens between 14 and 20 inches, use proportional positioning
      return '-30px';
    }
  };

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full overflow-hidden`}>
        <div className='flex flex-col w-full'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]'>
            TRANSFORMING VISIONS INTO
          </h1>
          <div className='flex items-center'>
            <span className='text-gradient font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100.8px] leading-[75px]'>REALITY</span>
            <div className='ss:flex md:ml-8 ml-4'>
              <GetStarted/>
            </div>
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We are your one-stop solution for all digital needs. From stunning designs and creative branding 
          to cutting-edge websites and mobile applications. Let us bring your vision to life with our 
          comprehensive range of professional services.
        </p>
      </div>
      
      {/* Image container with dynamic positioning */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="w-full px-4 sm:px-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`hero ${index + 1}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  left: getImageLeftPosition(),
                  transition: 'opacity 1000ms'
                }}
                className={`${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero