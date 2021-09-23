import Link from "next/link"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"

const SingpleProduct = ({ product }) => {

  const { title, img, price, } = product

  return (
    <Link href={`products/${product.id}`}>
      <a
        className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 h-full mb-4 duration-300 group"}>
        <div className={" w-full h-72 light-bg overflow-hidden relative flex items-center "}>

          <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-40 duration-300">
            <div className="opacity-0 h-full group-hover:opacity-100 text-4xl text-white duration-300">
              <div className="flex w-full h-full items-center justify-center gap-3">
                <div className="p-2 cursor-pointer"><AiOutlineShoppingCart /></div>
                <div className="p-2 cursor-pointer"><AiOutlineHeart /></div>
              </div>
            </div>
          </div>

          <img
            src={img}
            alt="Product"
          />
        </div>

        <div className='my-4'>
          <h3 className='text-xl font-semibold blue-text'>{title || "Exclusive Product"}</h3>
          <div className=" w-full  flex justify-between items-center">
            <p className='text-2xl primary-text'>${price || 99}</p>
            <div className="flex gap-4">
              <div className={belowIcon}><AiOutlineShoppingCart size={24} /></div>
              <div className={belowIcon + " "}><AiOutlineHeart size={24} /></div>
            </div>
          </div>
        </div>

      </a>
    </Link>
  )
}

const belowIcon = " p-2 cursor-pointer border-2 rounded hover:border-gray-500 duration-200 "

export default SingpleProduct
