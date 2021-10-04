import { Link } from "react-router-dom";

const SingleCategory = ({ category }) => {
  const { img, title } = category;

  return (
    <Link
      to={`/products?category=${category.title}`}
      className="w-full sm:w-1/2 lg:w-1/3 px-4 h-full mb-4 duration-300 cursor-pointer"
    >
      <div
        className={
          " w-full h-72 lg:h-96 light-bg overflow-hidden relative flex items-center "
        }
      >
        <div className="absolute inset-0">
          <div className="flex flex-col w-full h-full items-center justify-center gap-3 bg-black bg-opacity-30 text-white">
            <h1 className="text-xl">{title}</h1>
            <div className="w-12 h-1.5 my-4 bg-red-500" />
          </div>
        </div>

        <img src={img} alt="Product" />
      </div>
    </Link>
  );
};

export default SingleCategory;
