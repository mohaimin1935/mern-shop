import styles from "../../styles/home.module.css"
import Button from "../common/Button"

const Hero = () => {
  return (
    <div className={styles.wrapper + " "}>
      <div className="flex justify-center items-center w-full h-full">
        <div className={ 'bg-white bg-opacity-60 w-full xl:bg-transparent blue-text py-8 flex flex-col items-center '}>
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold mb-5">
            Clumsy Clothing
          </h1>
          <Button href="/">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
