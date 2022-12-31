import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import Rating from './Rating'

function SingleProduct({ product, title, image, price, category, rating, brand, discount, stock, images}) {
  const [displayFullImage, setDisplayFullImage] = useState(null)
  console.log(displayFullImage)

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <>
    <div className="flex flex-col gap-1 rounded-md shadow-md p-2 bg-white w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full">

      <div className="rounded-md border border-gray-200 w-full md:w-5/12">
        {displayFullImage !== null ?
        <img src={displayFullImage} alt={title} className='rounded h-72 w-full' />
        :
        <img src={image} alt={title} className='rounded h-72 w-full' />
        }
      </div>
      <div className="flex flex-col gap-2 relative w-full md:w-7/12">
      <p className='font-roboto z-50 top-0 text-[16px] px-4 py-2 rounded-md bg-[#FFA500] justify-end right-1 absolute'>{discount}%</p>


      <div
        className='flex cursor-pointer flex-row  gap-4 p-2'>

        <p
         className='font-roboto cursor-pointer text-[18px] capitalize'>{title}</p>
        
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
            onClick={() => handleAddToCart(product)}
            className='text-center justify-center flex flex-row gap-3 font-roboto text-[14px] 
            text-white bg-slate-800 rounded-md w-full px-4 py-2'>
                Add to cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>


                </button>
        </div>
      </div>
      </div>
      <div className="flex flex-row gap-2 py-1 px-2 w-full ">
        {images?.map((im, index) => (

        <div className="rounded-lg ">
          <img 
          onClick={() => setDisplayFullImage(im)}
          src={im} alt={index} className='w-28 h-28 rounded'/>
        </div>
        ))}
      </div>
      {/* <img src={displayFullImage} alt='' className='w-full h-60 rounded'/> */}

    </div>
    </>
  )
}

export default SingleProduct