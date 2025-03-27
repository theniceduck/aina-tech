import React from 'react'
import { announcement } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== announcement.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Announcement = () => {
  return (
    <section id='announcement' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Latest Updates & <br className='sm:block hidden'/>Company News</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Stay informed about our latest achievements, new services, and upcoming events. 
          We're constantly evolving and bringing innovative solutions to our clients. 
        </p>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Subscribe to our newsletter to receive real-time news and updates directly in your inbox.
          Don't miss out on exclusive insights and exciting announcements!
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {announcement.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Announcement 