import { popularProducts } from "../../data"
import SingpleProduct from "./SingpleProduct"

const ProductList = () => {
  return (
    <div className="container">
      <div className='flex flex-wrap items-center justify-center mt-8 mb-24'>
        {popularProducts.map(product => <SingpleProduct product={product} />)}
      </div>
    </div>
  )
}

export default ProductList