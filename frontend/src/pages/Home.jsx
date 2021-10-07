import CategoryList from "../components/categories/CategoryList";
import SectionTitle from "../components/common/SectionTitle";
import Hero from "../components/home/Hero";
import NewsLetter from "../components/home/NewsLetter";
import ProductList from "../components/products/ProductList";
import { useProducts } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useProducts();

  return (
    <div>
      <Hero />

      <SectionTitle>Latest Products</SectionTitle>
      <ProductList products={products} />
      <SectionTitle>Trending Categories</SectionTitle>
      <CategoryList categories={categories} />
      <NewsLetter />
    </div>
  );
};

export default Home;

const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "WOMAN",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "MAN",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "ACCESSORY",
  },
];
