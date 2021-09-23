import { BiMinus, BiPlus } from "react-icons/bi"
import SectionTitle from "../../components/common/SectionTitle"
import { Colors, Sizes } from "../../components/products/Filter"

const ProductDetailPage = () => {
  return (
    <div className='container'>
      <SectionTitle>Denim Jumpsuit</SectionTitle>
      <div className='flex flex-col sm:flex-row gap-12 mb-20'>
        {/* image */}
        <div className='w-1/2'>
          <img
            className='light-bg'
            src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
            alt="Product"
          />
        </div>

        {/* meta */}
        <div className='w-1/2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum ipsam quo suscipit, rem iure consequuntur obcaecati cumque reiciendis alias mollitia provident maiores est aut quia cum quod ea itaque.
          </p>
          <p className="my-6 text-3xl primary-text font-bold">$99.00</p>
          <div className="w-56 flex flex-col gap-6">
            <Colors full={true} />
            <Sizes full={true} />
          </div>

          <div className="flex items-center mt-8">
            <button>
              <BiPlus size={24} />
            </button>
            <input type="text" className='w-12 border-2 border-gray-400 focus:outline-none mx-2 px-2 rounded' />
            <button>
              <BiMinus size={24} />
            </button>
          </div>

          <button className="px-4 py-2 text-lg rounded mt-3 border-2 border-gray-400 light-bg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
