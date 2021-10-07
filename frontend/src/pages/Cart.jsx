import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import SectionTitle from "../components/common/SectionTitle";
import CartProduct from "../components/products/CartProduct";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { userRequest } from "../requests";

const STRPIE_KEY =
  "pk_test_51JaK2vEjt4WAgsTc8fC6RCemczKFhdt3PDJ0ved7kwaxwLUh8crFaLy5nanPte2nbwucwC3AkEfixSFVIuGaxddK00HxsiR7nN";

const Cart = () => {
  const { cartItems, totalPrice } = useCart();
  const { currentUser } = useAuth();
  const history = useHistory();

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res);
        history.push("/success");
      } catch (error) {
        console.log(error);
      }
    };
    if (totalPrice > 0 && stripeToken?.id) makeRequest();
  }, [stripeToken, totalPrice, history]);

  return (
    <div className="container">
      <SectionTitle>Your Cart</SectionTitle>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="w-full lg:w-2/3">
          <Link
            to="/"
            className="inline-block mb-4 px-3 py-1.5 border-2 border-gray-500 text-md"
          >
            Continue Shopping
          </Link>

          {cartItems?.length > 0 ? (
            cartItems.map((item, index) => (
              <CartProduct item={item} index={index} key={index} />
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full p-6 bg-gray-300">
              <p className="text-center">Cart is empty</p>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="ml-auto">
            {currentUser && totalPrice > 0 ? (
              <StripeCheckout
                name="Clumsy Clothes"
                image="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-shop-icon-png-image_3762863.jpg"
                billingAddress
                shippingAddress
                description={`Your total is $${totalPrice}`}
                amount={totalPrice * 100}
                token={onToken}
                stripeKey={STRPIE_KEY}
              >
                <button className="inline-block px-3 py-1.5 mb-6 dark-bg text-md">
                  Checkout Now
                </button>
              </StripeCheckout>
            ) : (
              <Link
                to="/login"
                className="inline-block px-3 py-1.5 mb-6 dark-bg text-md"
              >
                {totalPrice > 0 ? "Login to checkout" : "Add items to checkout"}
              </Link>
            )}
          </div>

          <div className="border-2 p-4 flex flex-col gap-2">
            <h4 className="text-2xl border-b">ORDER SUMMARY</h4>
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>${parseFloat(totalPrice).toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Estimated Shipping</p>
              <p>{totalPrice > 0 ? "$10.00" : "$0.00"}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping Discount</p>
              <p>{totalPrice > 0 ? "-$5.00" : "$0.00"}</p>
            </div>
            <div className="border-t flex text-xl font-semibold items-center justify-between">
              <p>Total</p>
              <p>
                $
                {totalPrice > 0
                  ? parseFloat(totalPrice + 5).toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 bg-transparent"></div>
    </div>
  );
};

export default Cart;
