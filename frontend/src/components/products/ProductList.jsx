import SingpleProduct from "./SingpleProduct";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-left mt-8 mb-24">
        {products.map((product) => (
          <SingpleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
