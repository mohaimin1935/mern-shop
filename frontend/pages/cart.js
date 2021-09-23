import Link from "next/link"
import SectionTitle from "../components/common/SectionTitle"
import CartProduct from "../components/products/CartProduct"

const Cart = () => {
  return (
    <div className='container'>
      <SectionTitle>
        Your Cart
      </SectionTitle>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="w-full lg:w-2/3">

          <Link href="/">
            <a className="inline-block mb-4 px-3 py-1.5 border-2 border-gray-500 text-md">Continue Shopping</a>
          </Link>

          <CartProduct />
          <CartProduct />
          <CartProduct />

        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className='ml-auto'>
            <Link href="/">
              <a className="inline-block px-3 py-1.5 mb-6 dark-bg text-md">Checkout Now</a>
            </Link>
          </div>

          <div className="border-2 p-4 flex flex-col gap-2">
            <h4 className="text-2xl border-b">ORDER SUMMARY</h4>
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>$80.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Estimated Shipping</p>
              <p>$10.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping Discount</p>
              <p>-$5.00</p>
            </div>
            <div className="border-t flex text-xl font-semibold items-center justify-between">
              <p>Total</p>
              <p>$85.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 bg-transparent"></div>
    </div>
  )
}

export default Cart
