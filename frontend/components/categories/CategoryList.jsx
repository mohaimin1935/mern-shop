import { categories } from "../../data"
import SingleCategory from "./SingleCategory"

const CategoryList = () => {
  return (
    <div className="container">
      <div className='flex flex-wrap items-center justify-center m-8 mb-24'>
        {categories.map(category => <SingleCategory category={category} />)}
      </div>
    </div>
  )
}

export default CategoryList
