import { BiMinus, BiPlus } from "react-icons/bi";

const CartProduct = ({ item }) => {
  const { product, quantity, size, color } = item;

  console.log(product.img);

  return (
    <div className="relative flex items-center light-bg px-2 py-2 mb-2 border-b-2 gap-4">
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
            <button>
              <BiPlus size={24} />
            </button>
            <div className="w-8 h-8 border-2 flex justify-center items-center rounded">
              {quantity}
            </div>
            <button>
              <BiMinus size={24} />
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
