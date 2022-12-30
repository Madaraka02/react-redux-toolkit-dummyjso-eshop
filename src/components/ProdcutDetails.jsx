import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../features/products/productsApiSlice'
import SingleProduct from './SingleProduct'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProdcutDetails() {
    const  { productId } = useParams()
    const { data: product, error, isLoading } = useGetSingleProductQuery(productId)
    console.log(product)
  return (
    <>
    {/* single prod component */}
    {isLoading?
        <Skeleton height={300}/>
        :
    <SingleProduct
    title={product?.title} 
    brand={product?.brand} 
    discount={product?.discountPercentage} 
    stock={product?.stock} 
    image={product?.thumbnail} 
    price={product?.price} 
    category={product?.category} 
    rating={product?.rating}
    images={product?.images} 
    
    />
    }
    </>
  )
}

export default ProdcutDetails