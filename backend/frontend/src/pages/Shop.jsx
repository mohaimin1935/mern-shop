import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Loading } from "../components/common/Loading";
import SectionTitle from "../components/common/SectionTitle";
import Filter from "../components/products/Filter";
import ProductList from "../components/products/ProductList";
import { publicRequest } from "../requests";

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.search?.split("=")[1];

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState();
  const [sort, setSort] = useState();

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : `/products`
        );
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    filters &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="container">
      <SectionTitle>{cat ? cat.toUpperCase() : "All Categories"}</SectionTitle>

      <Filter handleFilters={handleFilters} setSort={setSort} />

      {products ? (
        <ProductList
          products={filters || sort ? filteredProducts : products?.slice(0, 8)}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductsPage;
