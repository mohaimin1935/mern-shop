import { useProducts } from "../../contexts/ProductContext";

const Filter = ({ handleFilters, setSort }) => {
  const { availableColors, availableSizes } = useProducts();

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>

          <select
            className="p-2 border-2 capitalize mr-4"
            name="color"
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            {availableColors.map((color) => (
              <option className="" value={color}>
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
            {availableSizes.map((size) => (
              <option className="" value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="text-lg font-semibold mr-4">Sort Products</span>
          <select
            className="p-2 border-2 ml-auto capitalize"
            name="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price(desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
