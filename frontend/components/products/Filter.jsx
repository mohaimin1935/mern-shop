import { useState } from "react"
import { BiSlider, BiCheck } from "react-icons/bi"
import { IoClose } from "react-icons/io5"

const Filter = () => {

  const [showFilter, setShowFilter] = useState(false)

  const handleShowFilter = () => {
    if (!showFilter) {
      setShowFilter(true)
    } else return
  }

  return (
    <div className='container relative z-20'>
      <div className="mx-2 flex items-center justify-center">
        <div onClick={handleShowFilter} className={showFilter ? filters : filterIcon}>
          {!showFilter && <BiSlider size={24} onClick={() => setShowFilter(true)} />}
          {showFilter && (
            <div className='px-8 py-4 light-bg flex flex-wrap justify-center relative shadow rounded-lg'>
              <div
                className="absolute right-4 p-2 rounded-full bg-red-400 cursor-pointer"
                onClick={() => setShowFilter(false)}
              >
                <IoClose size={24} />
              </div>
              <Categories />
              <Colors />
              <Sizes />
              <PriceRange />
              <SortBy />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const filterIcon = "bg-green-300 w-12 h-12 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg duration-300 cursor-pointer"
const filters = "w-full duration-300 opacity-100 rounded-lg "

const filterItem = "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mt-6 px-3 lg:px-6"
const filterValue = (active) => ("cursor-pointer px-2 my-1.5 rounded border " + (active ? "primary-bg text-white " : ""))
const colorValue = (color) => (`cursor-pointer bg-${color}-500 flex items-center text-${color}-50 justify-center rounded-full border-2 w-9 h-9 border-${color}-300`)

const Categories = () => {
  return (
    <div className={filterItem}>
      <h4 className="text-xl">Categories</h4>
      <p className={filterValue(false)}>Men</p>
      <p className={filterValue(false)}>Women</p>
      <p className={filterValue(false)}>Kid</p>
    </div>
  )
}

export const Colors = ({ full = false }) => {
  return (
    <div className={full ? "" : filterItem}>
      <h4 className="text-xl">Colors</h4>
      <div className="flex flex-wrap gap-2 items-center">
        <div className={colorValue("green")}>{true && <BiCheck size={24} />}</div>
        <div className={colorValue("red")}>{false && <BiCheck size={24} />}</div>
        <div className={colorValue("indigo")}>{false && <BiCheck size={24} />}</div>
        <div className={colorValue("pink")}>{true && <BiCheck size={24} />}</div>
        <div className={colorValue("purple")}>{false && <BiCheck size={24} />}</div>
      </div>
    </div>
  )
}

export const Sizes = ({ full = false }) => {
  return (
    <div className={full ? "" : filterItem}>
      <h4 className="text-xl">Sizes</h4>
      <p className={filterValue(true)}>XL (72 cm)</p>
      <p className={filterValue(false)}>L (70 cm)</p>
      <p className={filterValue(false)}>M (68 cm)</p>
    </div>
  )
}

const PriceRange = () => {
  return (
    <div className={filterItem}>
      <h4 className="text-xl">Price Range</h4>
      <p className={filterValue(true)}> Less than $30</p>
      <p className={filterValue(false)}>$30 to $100</p>
      <p className={filterValue(false)}>More than $100</p>
    </div>
  )
}

const SortBy = () => {
  return (
    <div className={filterItem}>
      <h4 className="text-xl">Sort by</h4>
      <p className={filterValue(true)}>Newest</p>
      <p className={filterValue(false)}>Popular</p>
      <p className={filterValue(false)}>Price (Low to high)</p>
      <p className={filterValue(false)}>Price (High to low)</p>
    </div>
  )
}


export default Filter
