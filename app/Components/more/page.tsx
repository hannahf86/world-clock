'use client'

import React from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

// TASK ONE: Create animation for time and location panel
// TASK TWO: Use state (see if there's a better option) to change the button and appearance of the panel


const Button: React.FC = () => {

  const styles = {
    button: 'bg-white flex items-center justify-evenly rounded-full px-2 py-1',
    iconContainer: 'bg-[#303030] rounded-full ml-4 ',
    icon: 'p-2 text-white',
    text: 'text-lg tracking-widest text-[#303030] font-bold px-4',
  }

  return (
    <div>
      <button className={styles.button}>
        <p className={styles.text}>MORE</p>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <HiChevronDown size={25} />
          </div>
        </div>
      </button>
    </div>
  )
}

export default Button
