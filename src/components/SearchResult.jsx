
import React, { useState } from 'react'
import Product from './Product'
import ProductList from './ProductList'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSearchProductQuery } from '../features/products/productsApiSlice'
import { useSearchParams } from "react-router-dom";


function SearchResult() {
    const searchParams = useSearchParams();

    const { data: products, isLoading, isSuccess, isError, error } = useSearchProductQuery('phone')
    const [displayDesign, setDisplayDesign] = useState('gridView')
    console.log('products', products)
    // const term = searchParams.get('q')
    console.log('search term', searchParams)

  return (
    <>
        <div className='hidden md:flex flex-row-reverse gap-4 px-4 py-4 rounded-md bg-white shadow-md'>
        <div
        onClick={() => setDisplayDesign('listView') } 
        className='flex flex-row gap-2 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <p className='font-roboto text-[18px] capitalize'>List</p>


        </div>
        <div
        onClick={() => setDisplayDesign('gridView') } 
        className='flex flex-row gap-2 cursor-pointer'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
        <p className='font-roboto text-[18px] capitalize'>Grid</p>


        </div>

    </div>
    <>
    <div className={`${displayDesign === 'gridView' ? 'flex md:grid flex-col md:grid-cols-4':'flex flex-col' }  gap-2 py-4`}>
    {isLoading?
    // <LoadingSkeleton />
    <>
    <Skeleton height={500} width='100%'/>
    <Skeleton height={500} width='100%'/>
    <Skeleton height={500} width='100%'/>
    <Skeleton height={500} width='100%'/>

      </>


    :
    <>
    {products?.products?.map((product) => (
      <>
      {displayDesign === 'gridView' ?

        <Product 
        id={product.id}
        title={product.title} 
        brand={product.brand} 
        discount={product.discountPercentage} 
        stock={product.stock} 
        image={product.thumbnail} 
        price={product.price} 
        category={product.category} 
        rating={product.rating} />  
        :

        <ProductList
        id={product.id}
        title={product.title} 
        brand={product.brand} 
        discount={product.discountPercentage} 
        stock={product.stock} 
        image={product.thumbnail} 
        price={product.price} 
        category={product.category} 
        rating={product.rating} /> 

        }    
      </>
    ))}
    </>
    }
    </div>
    </>

    </>
  )
}

export default SearchResult