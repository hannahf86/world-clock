import Image from "next/image"

// BACKGROUND IMAGES
import daytimeMobile from '/assets/mobile/bg-image-daytime.jpg'

// COMPONENTS
import Quote from "./Components/quote/page"
import Time from "./Components/time/page"
import Button from "./Components/more/page"


export default function Home() {

  {/* STYLES */ }
  const styles = {
    backgroundImage: 'fixed w-screen h-screen relative brightness-50',
    quote: 'absolute top-12 left-8',
    time: 'absolute left-8 bottom-40',
    more: 'absolute left-8 bottom-16',
  }

  return (
    <>
      <div className={styles.backgroundImage}>
        <Image src={daytimeMobile} alt='daytime background' />
      </div>

      <div className={styles.quote}>
        <Quote />
      </div>

      <div className={styles.time}>
        <Time />
      </div>

      <div className={styles.more}>
        <Button />
      </div>

    </>
  )
}
