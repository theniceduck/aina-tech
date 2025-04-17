import React from 'react'
import {
  Services,
  Announcement,
  Portfolio,
  Contact_Us,
  Footer,
  Hero,
  Navbar,
  Partners,
  Stats,
  Testimonials,
  Chatbot
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar doesn't need boxWidth here */}
      <Navbar />

      {/* Push content down because Navbar is fixed */}
      <div className={`bg-primary pt-[120px] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Announcement />
          <Services />
          <Portfolio />
          <Testimonials />
          <Partners />
          <Contact_Us />
          <Footer />
        </div>
      </div>

      <Chatbot />
    </div>
  )
}

export default App
