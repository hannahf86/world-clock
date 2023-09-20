import React from 'react'
import { HiSun, HiOutlineRefresh, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const Time: React.FC = () => {

  const styles = {
    mobileQuoteContainer: 'flex items-start mx-8 mt-12 ',
    text: 'text-white font-light text-md w-11/12 leading-loose',
    author: 'text-white font-bold text-md w-11/12 leading-loose pt-2',
    icon: 'text-white pl-12 brightness-75',

    mobileTimeContainer: 'mx-8 mt-72',
    mobileGreeting: 'text-white text-xl font-light tracking-widest flex items-center ',
    sunIcon: 'pr-4',
    mobileTimeLocation: 'flex items-baseline ',
    mobileTime: 'text-white font-bold',
    mobileShortLocation: 'text-white font-light text-xl',
    mobileLocation: 'text-white text-2xl font-bold tracking-widest',

    buttonContainer: 'mx-8 mt-10',
    button: 'bg-white flex items-center justify-evenly rounded-full px-1 py-1',
    iconContainer: 'bg-[#303030] rounded-full ml-4 ',
    buttonIcon: 'p-1 text-white',
    buttonText: 'text-lg tracking-widest text-[#303030] font-bold px-4',
  }

  return (
    <div>
      {/*  QUOTE */}
      <div className={styles.mobileQuoteContainer}>
        <div>
          <p className={styles.text}>"I am a mindful quote! I am a mindful quote! I am a mindful quote! I am a mindful quote!
            <br /> I am a mindful quote! I am mindful!"</p>
          <p className={styles.author}>Author's Name</p>
        </div>

        <div className={styles.icon}>
          <HiOutlineRefresh size={25} />
        </div>
      </div>



      {/* TIME & LOCATION */}
      <div className={styles.mobileTimeContainer}>
        <div className={styles.mobileGreeting}>
          <div className={styles.sunIcon}><HiSun size={30} /></div>
          <h2>GOOD MORNING</h2>
        </div>

        <div className={styles.mobileTimeLocation}>
          <h1 className={styles.mobileTime}>11:37</h1>
          <h2 className={styles.mobileShortLocation}>BST</h2>
        </div>

        <h2 className={styles.mobileLocation}>IN LONDON, UK</h2>
      </div>


      {/* MORE BUTTON */}
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <p className={styles.buttonText}>MORE</p>
          <div className={styles.iconContainer}>
            <div className={styles.buttonIcon}>
              <HiChevronDown size={25} />
            </div>
          </div>
        </button>
      </div>

    </div>
  )
}

export default Time
