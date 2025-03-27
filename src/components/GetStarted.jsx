import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[16px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[20px] h-[20px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-[16px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
