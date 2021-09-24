import Image from "next/image"
import styles from "../../styles/Home.module.css"
import Button from "../common/Button"

const Hero = () => {
  return (
    <div className={styles.wrapper + " "}>
      <div className="container h-full w-full flex items-center justify-center relative">
        <img
          src={"https://i.ibb.co/XsdmR2c/1.png"}
          className="object-cover h-full absolute lg:relative opacity-70 md:opacity-100 left-0"
          alt="Shop"
        />
        <div className="flex flex-col items-center text-center px-8 py-6 rounded-lg z-10 ml-0 md:ml-72 lg:ml-0" >
          <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold mb-3">
            Clumsy Clothes
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mb-6">Exclusive products for summer sale!</p>
          <Button href="/products" className='text-lg font-semibold'>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
