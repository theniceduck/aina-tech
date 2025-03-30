import React from 'react'
import { apple, google, logo } from '../assets'
import styles, { layout } from '../style'

const Services = () => {
  const servicesList = [
    {
      title: "Logo Design",
      description: "Create distinctive and memorable brand identities with custom logo designs that capture your company's essence."
    },
    {
      title: "Name Card Design",
      description: "Professional business card designs that make lasting impressions and effectively communicate your brand."
    },
    {
      title: "Poster Design",
      description: "Eye-catching poster designs that grab attention and effectively convey your message to your target audience."
    },
    {
      title: "Banner Design",
      description: "Striking banner designs for events, websites, and marketing campaigns that maximize visual impact."
    },
    {
      title: "Jersey/Shirt Design",
      description: "Custom apparel designs that combine style and comfort, perfect for teams, events, and brand merchandise."
    },
    {
      title: "Social Media Design",
      description: "Engaging social media graphics and content that boost your online presence and drive engagement."
    },
    {
      title: "Branding Event Kit",
      description: "Comprehensive event branding solutions including signage, materials, and promotional items."
    },
    {
      title: "Photography/Videography",
      description: "Professional photo and video services capturing your moments and products in stunning detail."
    },
    {
      title: "3D Modeling & Animation",
      description: "Bring your ideas to life with high-quality 3D models and captivating animations for various industries."
    },
    {
      title: "3D Printing",
      description: "Transform digital designs into physical objects with our advanced 3D printing services."
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and best practices."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      title: "API Development & Integration",
      description: "Seamless API solutions that connect your systems and enable efficient data exchange."
    },
    {
      title: "Database Application & Management",
      description: "Robust database solutions and management systems for efficient data handling and storage."
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and challenges."
    },
    {
      title: "AI & Automation Solutions",
      description: "Intelligent automation systems and AI-powered solutions to streamline your operations."
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences."
    },
    {
      title: "Custom Web System",
      description: "Specialized web systems and platforms built to handle your unique business requirements."
    },
    {
      title: "AI Training",
      description: "Custom AI model training and implementation services to help businesses leverage machine learning for specific applications and challenges."
    },
    {
      title: "PC Building & Repair",
      description: "Expert computer assembly, maintenance, and repair services for personal and business systems tailored to your performance needs."
    },
    {
      title: "WhatsApp AI Chatbot",
      description: "Custom WhatsApp chatbot solutions powered by AI to automate customer interactions and streamline business communication processes."
    },
    {
      title: "Telegram Bot",
      description: "Specialized Telegram bots for business automation, marketing, customer support, and community management to enhance engagement."
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