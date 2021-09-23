import Link from "next/link"
import { BiMinus, BiPlus } from "react-icons/bi"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

const CartProduct = () => {
  return (
    <div className='relative flex items-center light-bg px-2 py-2 mb-2 border-b-2 gap-4'>

      {/* <div className="absolute bottom-3 right-3 flex cursor-pointer light-bg">
        <Link href={`/products/${1}`}><a className="p-1 cursor-pointer border-r-2"><AiOutlineEdit size={20} /></a></Link>
        <div className="p-1 cursor-pointer"><AiOutlineDelete size={20} /></div>
      </div> */}

      <img
        className='w-28 bg-white'
        src={"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"}
      />

      <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
        
        <div className="flex flex-col gap-1.5">
          <div className="flex">
            <h5 className="font-semibold">Product: &nbsp;</h5>
            <p>JESSIE THUNDER SHOES</p>
          </div>
          <div className="flex">
            <h5 className="font-semibold">ID: &nbsp;</h5>
            <p>19351905018</p>
          </div>
          <div className="flex items-cneter">
            <h5 className="font-semibold">Size: &nbsp;</h5>
            <p>37.5</p>
          </div>
          <div className="flex items-cneter">
            <h5 className="font-semibold">Color: &nbsp;</h5>
            <div className="w-6 h-6 rounded-full bg-pink-200"></div>
          </div>

        </div>

        <div className="flex flex-row sm:flex-col items-center my-auto gap-2">
          <div className="flex items-center">
            <button>
              <BiPlus size={24} />
            </button>
            <div className='w-8 h-8 border-2 border-gray-500 flex justify-center items-center rounded'>1</div>
            <button>
              <BiMinus size={24} />
            </button>
          </div>
          <div className="text-xl">$29.99</div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
