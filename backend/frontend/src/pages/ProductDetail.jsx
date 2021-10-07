import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useParams } from "react-router";
import { Loading } from "../components/common/Loading";
import SectionTitle from "../components/common/SectionTitle";
import { useCart } from "../contexts/CartContext";
// import { Colors, Sizes } from "../components/products/Filter";
import { publicRequest } from "../requests";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState({ color: 0, size: 0 });

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductById = async () => {
      const res = await publicRequest.get(`/products/${id}`);
      setProduct(res.data);
    };
    fetchProductById();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, filter.color, filter.size);
  };

  const handleFilters = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!product) return <Loading />;

  return (
    <div className="container">
      <SectionTitle>{product.title}</SectionTitle>
      <div className="flex flex-col sm:flex-row gap-12 mb-20">
        {/* image */}
        <div className="w-full sm:w-1/2 bg-purple-50">
          <img className="bg-purple-50" src={product.img} alt="Product" />
        </div>

        {/* meta */}
        <div className="w-full sm:w-1/2">
          <p>{product.desc || product.title + " is an exclusive product."}</p>
          <p className="my-6 text-3xl primary-text font-bold">
            ${product.price}
          </p>

          <div className="flex items-center">
            <select
              className="p-2 border-2 capitalize mr-4"
              name="color"
              onChange={handleFilters}
            >
              <option disabled>Color</option>
              {product?.color?.map((color, index) => (
                <option className="" value={index}>
                  {color}
                </option>
              ))}
            </select>

            <select
              className="p-2 border-2 uppercase"
              name="size"
              onChange={handleFilters}
            >
              <option disabled className="capitalize">
                Size
              </option>
              {product?.size?.map((size, index) => (
                <option className="" value={index}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center mt-8">
            <button onClick={() => handleQuantity("dec")}>
              <BiMinus size={20} />
            </button>
            <p type="text" className="px-3 border mx-1 font-semibold text-lg">
              {quantity}
            </p>
            <button onClick={() => handleQuantity("inc")}>
              <BiPlus size={20} />
            </button>
          </div>

          <button
            className="px-4 py-2 text-lg rounded mt-3 dark-bg"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
