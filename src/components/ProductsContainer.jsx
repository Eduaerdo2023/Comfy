
import { useLoaderData } from 'react-router-dom'
import ProductGrid from './ProductGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'


const ProductsContainer = () => {

  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
return 
 }  
 return (
    <>
      <ProductsList />
      <ProductGrid />
    </>
  )
}

export default ProductsContainer
