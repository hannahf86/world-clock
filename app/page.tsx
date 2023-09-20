import Image from "next/image"

// BACKGROUND IMAGES
import daytimeMobile from '/assets/mobile/bg-image-daytime.jpg'
import nighttimeMobile from '/assets/mobile/bg-image-nighttime.jpg'

// COMPONENTS
import Time from "./Components/time/page"


export default function Home() {

  {/* STYLES */ }
  const styles = {
    backgroundImage: 'fixed w-screen h-screen relative brightness-50',
    time: 'absolute top-0',
  }

  return (
    <>
      <div className={styles.backgroundImage}>
        <Image src={daytimeMobile} alt='daytime background' />
      </div>

      <div className={styles.time}>
        <Time />
      </div>

    </>
  )
}
