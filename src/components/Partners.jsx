import React from 'react'
import styles from '../style'
import { cairo } from '../assets'

const Partners = () => {
  const partner = {
    id: "partner-1",
    name: "Centre for Artificial Intelligence and Robotics (CAIRO)",
    description: "CAIRO is a center for Research & Development based in Universiti Teknologi Malaysia, founded in 1997 as one of Centers of Excellence. Specialized in Artificial Intelligence, Robotics, and Control & Automation, CAIRO has strong linkages and networking with both academic institutions and industrial sectors.",
    logo: cairo
  };

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='w-full text-center mb-16 relative z-[1]'>
        <h2 className={styles.heading2}>Strategic Partner</h2>
        <div className='mt-6'>
          <p className={`${styles.paragraph} max-w-[800px] mx-auto`}>
            Our strategic partnership with CAIRO strengthens our commitment to innovation and excellence 
            in artificial intelligence and robotics solutions.
          </p>
        </div>
      </div>

      <div className='w-full max-w-[1000px] relative z-[1]'>
        <div className='flex flex-col md:flex-row items-center bg-black-gradient rounded-[20px] overflow-hidden'>
          {/* Logo Section */}
          <div className='w-full md:w-[40%] p-8 bg-white flex items-center justify-center'>
            <img
              src={partner.logo}
              alt={partner.name}
              className='w-full max-w-[300px] h-auto object-contain'
            />
          </div>

          {/* Content Section */}
          <div className='w-full md:w-[60%] p-8 md:pl-12'>
            <h3 className='font-poppins font-semibold text-white text-[28px] leading-[34px] mb-4'>
              {partner.name}
            </h3>
            <div className='w-[60px] h-[3px] bg-blue-gradient mb-6'/>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[28px]'>
              {partner.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners 