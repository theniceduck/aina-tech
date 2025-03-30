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

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-col w-full'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            TRANSFORMING VISIONS INTO
          </h1>
          <div className='flex items-center'>
            <span className='text-gradient font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]'>REALITY</span>
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
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`hero ${index + 1}`}
              className={`w-[100%] h-[100%] object-contain absolute left-[-60px] transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
