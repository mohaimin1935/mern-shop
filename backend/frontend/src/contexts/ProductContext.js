import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "../components/common/Loading";
import { publicRequest } from "../requests";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [availableColors, setAvilableColors] = useState([]);
  const [availableSizes, setAvilableSizes] = useState([]);
  const [availableCategories, setAvilableCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const fetchProducts = async () => {
    setProductsLoading(true);
    const res = await publicRequest.get("/products");
    setProducts(res.data);
    setProductsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products[0]) {
      const colorSet = new Set();
      const sizeSet = new Set();
      const categorySet = new Set();
      let min = products[0].price,
        max = products[0].price;
      products?.forEach((product) => {
        product.color?.forEach((c) => colorSet.add(c));
        product.size?.forEach((s) => sizeSet.add(s));
        product.categories?.forEach((cat) => categorySet.add(cat));
        if (product.price > max) max = product.price
        if (product.price < min) min=product.price
      });
      setAvilableColors(Array.from(colorSet));
      setAvilableSizes(Array.from(sizeSet));
      setAvilableCategories(Array.from(categorySet));
      setPriceRange([min, max])
    }
  }, [products]);

  const values = {
    products,
    productsLoading,
    availableColors,
    availableSizes,
    availableCategories,
    priceRange,
  };

  return (
    <ProductContext.Provider value={values}>
      {productsLoading ? <Loading /> : children}
    </ProductContext.Provider>
  );
};
