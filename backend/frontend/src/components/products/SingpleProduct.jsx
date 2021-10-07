import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const SingpleProduct = ({ product }) => {
  const { title, img, price } = product;
  const { addToCart } = useCart();

  const handleCart = (product, quantity = 1) => {
    addToCart(product, quantity);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 h-full mb-4 duration-300 group">
      <div
        className={
          " w-full h-72 bg-purple-50 overflow-hidden relative flex items-center "
        }
      >
        <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-40 duration-300">
          <div className="opacity-0 h-full group-hover:opacity-50 text-4xl text-white duration-300">
            <div className="flex w-full h-full items-center justify-center gap-3">
              {/* <div className="p-2 cursor-pointer">
                <AiOutlineShoppingCart />
              </div> */}
              {/* <div className="p-2 cursor-pointer">
                <AiOutlineHeart />
              </div> */}
            </div>
          </div>
        </div>

        <img src={img} alt="Product" className="hover:scale-125" />
      </div>

      <div className="my-4">
        <Link to={`products/${product._id}`}>
          <h3 className="text-xl font-semibold hover:underline">
            {title || "Exclusive Product"}
          </h3>
        </Link>
        <div className=" w-full  flex justify-between items-center">
          <p className="text-2xl primary-text">${price || 99}</p>
          <div className="flex gap-4">
            <div className={belowIcon} onClick={() => handleCart(product, 1)}>
              <AiOutlineShopping size={24} />
            </div>
            {/* <div className={belowIcon + " "}>
              <AiOutlineHeart size={24} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const belowIcon =
  " p-2 cursor-pointer border-2 rounded hover:border-gray-500 duration-200 ";

export default SingpleProduct;
