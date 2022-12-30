import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PRODUCT_PREFIX } from '../routes'
import Rating from './Rating'

function Product({id, title, image, price, category, rating, brand, discount, stock}) {
    const [showFullName, setShowFullName] = useState(false)
    const navigate = useNavigate()
  return (
    <>
    <Link to={`${PRODUCT_PREFIX}${id}`}>
        <div className=' bg-white rounded-md shadow-md flex flex-col gap-2 h-full'>
        <div className='rounded-md p-2 relative'>
          <img src={image} className='rounded-md h-48 w-full object-contain' />
        <p className='font-roboto top-0 text-[16px] px-4 py-2 rounded-md bg-[#FFA500] justify-end right-1 absolute'>{discount}%</p>

        </div>

        <div 
        onMouseEnter={() => setShowFullName(true)}
        onMouseLeave={() => setShowFullName(false)}
        className='flex cursor-pointer flex-row justify-between gap-2 p-2 relative'>

        <p
         className='font-roboto cursor-pointer text-[18px] capitalize'>{title.slice(0,23)} {title.length >23 && ('...')}</p>
        {showFullName &&
        <p className='font-roboto z-50 text-[16px] px-4 py-3 rounded-md bg-gray-200 w-full right-1 absolute'>{title}</p>
        }
        <p className='font-roboto text-[14px] '>{category}</p>

        </div>

        <p className='font-roboto text-[18px] capitalize p-2'>${price}</p>
        <div className='flex flex-row gap-2 p-2'>
        <p className='font-roboto text-[14px] capitalize p-2'>{brand}</p>
        <p className='font-roboto text-[14px] capitalize p-2'>{stock} items in stock</p>

        </div>
        <div className='flex flex-row gap-2 p-2'>
            <Rating rate={rating} />
            
        </div>
        <div className='p-2 w-full'>
            <button 
            className='text-center justify-center flex flex-row gap-3 font-roboto text-[14px] 
            text-white bg-slate-800 rounded-md w-full px-4 py-2'>
                Add to cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>


                </button>
        </div>

      </div>
    </Link>
    </>
  )
}

export default Product