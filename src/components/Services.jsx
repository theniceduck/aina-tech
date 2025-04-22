import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apple, google, logo } from '../assets'
import styles, { layout } from '../style'
import noimageplaceholder from '../assets/noimageplaceholder.png'
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Services = () => {
  const servicesList = [
    {
      "title": "Logo Design",
      "description": "Your brand's first impression? We make it unforgettable with logos that talk the talk.",
      "links": "https://example.com"
    },
    {
      "title": "Name Card Design",
      "description": "Business cards so sleek, they basically network themselves.",
      "links": "https://example.com"
    },
    {
      "title": "Poster Design",
      "description": "Posters that shout (in style). Big, bold, and made to be noticed.",
      "links": "https://example.com"
    },
    {
      "title": "Banner Design",
      "description": "From storefronts to scroll-stops — banners that grab attention wherever they hang.",
      "links": "https://example.com"
    },
    {
      "title": "Jersey/Shirt Design",
      "description": "Outfit your crew in custom gear that's got both swagger and spirit.",
      "links": "https://example.com"
    },
    {
      "title": "Social Media Design",
      "description": "We make your socials pop with scroll-stopping, double-tap-worthy designs.",
      "links": "https://example.com"
    },
    {
      "title": "Branding Event Kit",
      "description": "Everything you need to show up and show off — signs, swag, and serious style.",
      "links": "https://example.com"
    },
    {
      "title": "Photography/Videography",
      "description": "We don't just shoot — we capture moments that tell your story beautifully.",
      "links": "https://example.com"
    },
    {
      "title": "3D Modeling & Animation",
      "description": "Flat designs are so last season. Let's bring your ideas to life in 3D.",
      "links": "https://example.com"
    },
    {
      "title": "3D Printing",
      "description": "Digital dreams? Meet reality. We print your ideas into real-life creations.",
      "links": "https://example.com"
    },
    {
      "title": "Web Development",
      "description": "Websites that work hard, look good, and don't break under pressure.",
      "links": "https://example.com"
    },
    {
      "title": "Mobile App Development",
      "description": "We craft apps that live in your users' pockets — and their hearts.",
      "links": "https://example.com"
    },
    {
      "title": "API Development & Integration",
      "description": "Making apps talk to each other like old friends. Fast, reliable, drama-free.",
      "links": "https://example.com"
    },
    {
      "title": "Database Solutions",
      "description": "Your data deserves a safe, smart home — and we build exactly that.",
      "links": "https://example.com"
    },
    {
      "title": "Custom Software Development",
      "description": "Got a challenge? We build software that fits like a glove and works like a charm.",
      "links": "https://example.com"
    },
    {
      "title": "AI & Automation Solutions",
      "description": "Let the robots do the heavy lifting. We build smart tools that get the job done faster.",
      "links": "https://example.com"
    },
    {
      "title": "UI/UX Design",
      "description": "Good vibes only. We design experiences that users love to click, swipe, and enjoy.",
      "links": "https://example.com"
    },
    {
      "title": "Custom Web System",
      "description": "Your business isn't basic — your web system shouldn't be either. We tailor it all.",
      "links": "https://example.com"
    },
    {
      "title": "AI Training",
      "description": "We teach AI to do what you need — no boring pre-sets here.",
      "links": "https://example.com"
    },
    {
      "title": "PC Building & Repair",
      "description": "Whether you need a beast of a PC or a quick fix, we've got the tools and the know-how.",
      "links": "https://example.com"
    },
    {
      "title": "WhatsApp AI Chatbot",
      "description": "Conversations on autopilot. Our bots are smart, helpful, and never sleep.",
      "links": "https://example.com"
    },
    {
      "title": "Telegram Bot",
      "description": "Think of it as your digital assistant — automating, supporting, and marketing 24/7.",
      "links": "https://example.com"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='services' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Our Services
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[600px]`}>
           Explore the wide range of services we provide, designed to elevate your brand and meet your technical needs.
          </p>
        </div>
      </div>
      <div className="w-full relative z-[1] px-4">
        <Slider {...settings}>
          {servicesList.map((service, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col p-6 bg-black-gradient rounded-[20px] hover:bg-blue-gradient transition-all duration-300 cursor-pointer shadow-card h-full">
                <div>
                  <img 
                    src={noimageplaceholder} 
                    alt={service.title}
                    className="w-full h-[430px] object-cover rounded-[10px] mb-4"
                  />
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-white font-poppins font-semibold text-[20px] mb-2">{service.title}</h3>
                    <p className="text-dimWhite font-poppins text-[16px] leading-[24px]">{service.description}</p>
                  </div>
                  <div className="mt-2 pt-4">
                    <a href={service.links} className="text-white text-lg p-2 rounded-md bg-blue-500 hover:bg-blue-700 inline-flex items-center gap-2">Read More <ChevronRightIcon className="w-5 h-5"/> </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Services 