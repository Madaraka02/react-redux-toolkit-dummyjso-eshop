import React, { useState } from 'react'
import Rating from './Rating'

function Product({title, image, price, category, rating}) {
    const [showFullName, setShowFullName] = useState(false)
  return (
    <>
        <div className=' bg-white rounded-md shadow-md flex flex-col gap-2 h-full'>
        <div className='rounded-md p-2'>
          <img src={image} className='rounded-md h-48 w-full object-contain' />
        </div>

        <div 
        onMouseEnter={() => setShowFullName(true)}
        onMouseLeave={() => setShowFullName(false)}
        className='flex cursor-pointer flex-row justify-between gap-2 p-2 relative'>

        <p
         className='font-roboto cursor-pointer text-[18px] capitalize'>{title.slice(0,25)}...</p>
        {showFullName &&
        <p className='font-roboto z-50 text-[16px] px-4 py-3 rounded-md bg-gray-200 w-full right-1 absolute'>{title}</p>
        }
        <p className='font-roboto text-[14px] '>{category}</p>

        </div>

        <p className='font-roboto text-[18px] capitalize p-2'>${price}</p>
        <div className='flex flex-row gap-2 p-2'>
            <Rating rate={rating.rate} count={rating.count} />
            
        </div>
        <div className='p-2 w-full'>
            <button 
            className='text-center font-roboto text-[14px] 
            text-white bg-slate-800 rounded-md w-full px-4 py-2'>
                Add to cart</button>
        </div>

      </div>
    </>
  )
}

export default Product