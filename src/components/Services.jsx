import React from 'react'
import { apple, google, logo } from '../assets'
import styles, { layout } from '../style'

const Services = () => {
  const servicesList = [
    {
      "title": "Logo Design",
      "description": "Custom logos that reflect and strengthen your brand identity."
    },
    {
      "title": "Name Card Design",
      "description": "Sleek business cards that leave a memorable brand impression."
    },
    {
      "title": "Poster Design",
      "description": "Bold posters designed to attract attention and communicate clearly."
    },
    {
      "title": "Banner Design",
      "description": "Impactful banners for events, websites, and marketing campaigns."
    },
    {
      "title": "Jersey/Shirt Design",
      "description": "Stylish custom apparel for teams, events, and branding."
    },
    {
      "title": "Social Media Design",
      "description": "Graphics that boost online presence and engage your audience."
    },
    {
      "title": "Branding Event Kit",
      "description": "Complete event branding kits with signage and materials."
    },
    {
      "title": "Photography/Videography",
      "description": "Capture stunning visuals for events, products, and promotions."
    },
    {
      "title": "3D Modeling & Animation",
      "description": "Realistic 3D models and animations for various applications."
    },
    {
      "title": "3D Printing",
      "description": "Turn digital designs into physical products with 3D printing."
    },
    {
      "title": "Web Development",
      "description": "Custom websites built using modern, reliable web technologies."
    },
    {
      "title": "Mobile App Development",
      "description": "High-quality mobile apps for iOS, Android, and cross-platform."
    },
    {
      "title": "API Development & Integration",
      "description": "Efficient API solutions for seamless system communication."
    },
    {
      "title": "Database Application & Management",
      "description": "Reliable database systems for storing and managing data."
    },
    {
      "title": "Custom Software Development",
      "description": "Software built to solve your specific business problems."
    },
    {
      "title": "AI & Automation Solutions",
      "description": "Smart automation and AI tools to improve efficiency."
    },
    {
      "title": "UI/UX Design",
      "description": "Designs focused on intuitive and enjoyable user experiences."
    },
    {
      "title": "Custom Web System",
      "description": "Tailored web platforms for unique business functionality."
    },
    {
      "title": "AI Training",
      "description": "Train AI models for your business’s unique needs."
    },
    {
      "title": "PC Building & Repair",
      "description": "Build and repair PCs for optimal performance and reliability."
    },
    {
      "title": "WhatsApp AI Chatbot",
      "description": "Automate chats with smart, responsive WhatsApp AI bots."
    },
    {
      "title": "Telegram Bot",
      "description": "Powerful Telegram bots for support, marketing, and automation."
    }
  ];

  return (
    <section id='services' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <div className="w-full h-full relative z-[5] bg-black-gradient rounded-[20px] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-poppins font-semibold text-[32px]">Offered Services</h2>
            <img
              src={logo}
              alt="AINA Tech Solution"
              className="w-[80px] h-[80px] object-contain"
            />
          </div>
          <div className="h-[500px] overflow-y-auto pr-4 custom-scrollbar">
            {servicesList.map((service, index) => (
              <div key={index} className="mb-6 p-4 bg-dimBlue rounded-[10px] hover:bg-blue-gradient transition-all duration-300">
                <h3 className="text-white font-poppins font-semibold text-[20px] mb-2">{service.title}</h3>
                <p className="text-dimWhite font-poppins text-[16px]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} md:pl-20 md:translate-x-10`}>
        <h2 className={styles.heading2}>Our Comprehensive <br className='sm:block hidden'/> Service Solutions</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From creative design to cutting-edge technology solutions, we offer a complete suite of services 
          to help your business thrive in the digital age. Our expertise spans across design, development, 
          and innovation, delivering solutions that drive growth and success.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>  
    </section>
  )
}

export default Services 