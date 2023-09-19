import React from 'react'
import { HiSun } from 'react-icons/hi'

// TASK ONE: Get the local PC time
// TASK TWO: Change the image and phrase based on sed time
// TASK THREE: Use the API data to get the users' location



const Time: React.FC = () => {

  const styles = {
    mobileGreeting: 'text-white text-xl font-light tracking-widest flex items-center ',
    sunIcon: 'pr-4',
    mobileTimeContainer: 'flex items-baseline ',
    mobileTime: 'text-white font-bold',
    mobileShortLocation: 'text-white font-light text-xl',
    mobileLocation: 'text-white text-2xl font-bold tracking-widest',
  }

  return (
    <div>
      <div className={styles.mobileGreeting}>
        <div className={styles.sunIcon}><HiSun size={30} /></div>
        <h2>GOOD MORNING</h2>
      </div>

      <div className={styles.mobileTimeContainer}>
        <h1 className={styles.mobileTime}>11:37</h1>
        <h2 className={styles.mobileShortLocation}>BST</h2>
      </div>

      <h2 className={styles.mobileLocation}>IN LONDON, UK</h2>
    </div>
  )
}

export default Time
