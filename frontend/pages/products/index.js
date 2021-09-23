import { useRouter } from "next/router"
import { useState } from "react"
import SectionTitle from "../../components/common/SectionTitle"
import Filter from "../../components/products/Filter"
import ProductList from "../../components/products/ProductList"

const ProductsPage = () => {

  const { query } = useRouter()

  return (
    <div className="container">
      <SectionTitle>
        {query?.category ? query.category.toUpperCase() : "All Categories"}
      </SectionTitle>
      
      <Filter />

      <ProductList />
    </div>
  )
}

export default ProductsPage
