import { HiOutlineRefresh } from 'react-icons/hi'

const Quote: React.FC = () => {

  const styles = {
    container: 'flex items-start ',
    text: 'text-white font-light text-md w-11/12 leading-loose',
    author: 'text-white font-bold text-md w-11/12 leading-loose pt-2',
    icon: 'text-white pr-8 brightness-75 pt-2'
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>"I am a mindful quote! I am a mindful quote! I am a mindful quote! I am a mindful quote!
          <br /> I am a mindful quote! I am a mindful quote!"</p>
        <p className={styles.author}>Author's Name</p>
      </div>

      <div className={styles.icon}>
        <HiOutlineRefresh size={25} />
      </div>
    </div>
  )
}

export default Quote
