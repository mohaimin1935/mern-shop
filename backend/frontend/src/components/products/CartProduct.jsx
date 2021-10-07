import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from "../../contexts/CartContext";

const CartProduct = ({ item, index }) => {
  const { product, quantity, size, color } = item;

  const { removeFromCart, updateCartItem } = useCart();

  const handleQuantity = (type) => {
    if (type === "inc") {
      updateCartItem(index, quantity + 1);
    } else if (type === "dec" && quantity > 1) {
      updateCartItem(index, quantity - 1);
    }
  };

  return (
    <div className="relative flex items-center light-bg px-2 py-2 mb-2 border-b-2 gap-4">
      <button
        className="absolute top-0 right-2 text-red-400 p-1 cursor-pointer z-10"
        onClick={() => removeFromCart(index)}
      >
        <AiOutlineCloseCircle size={20} />
      </button>

      <img
        className="w-28 bg-purple-50"
        alt="cart product"
        src={product?.img}
      />

      <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex">
            <h5 className="font-semibold">Product: &nbsp;</h5>
            <p className="uppercase">{product?.title}</p>
          </div>
          <div className="flex">
            <h5 className="font-semibold">ID: &nbsp;</h5>
            <p>{product?._id}</p>
          </div>
          <div className="flex items-cneter">
            <h5 className="font-semibold">Size: &nbsp;</h5>
            <p>{size}</p>
          </div>
          <div className="flex items-cneter">
            <h5 className="font-semibold">Color: &nbsp;</h5>
            <p className="capitalize">{color}</p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center my-auto gap-2">
          <div className="flex items-center">
            <button onClick={() => handleQuantity("dec")}>
              <BiMinus size={24} />
            </button>
            <div className="w-8 h-8 border-2 flex justify-center items-center rounded">
              {quantity}
            </div>
            <button onClick={() => handleQuantity("inc")}>
              <BiPlus size={24} />
            </button>
          </div>
          <div className="text-xl">
            ${parseFloat(product.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
