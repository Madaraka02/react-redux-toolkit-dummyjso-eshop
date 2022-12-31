import React from 'react'

function CartItem({product, title, price, quantity, image, totalPrice}) {
  return (
    <>
    <div className="flex flex-row gap-2 rounded-md w-full border justify-between px-2 py-2  border-slate-800">
        <div className="border border-slate-400 rounded-md">
            <img src={image} alt={title} className='rounded h-20 w-20' />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <p className='font-roboto text-[16px] text-slate-800'>{title}</p>
            <div className="flex flex-row cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p className='font-roboto text-[16px] text-red-300'>remove</p>
            </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <p className='font-roboto text-[16px] text-slate-800'>{price}</p>

        </div>
        <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
            <div className="flex flex-row border border-slate-800 rounded-md gap-2 px-1 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 py-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
            </svg>

            <p className='font-roboto text-[16px] text-slate-800 border-r border-l border-slate-800 px-2 py-1'>{quantity}</p>


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 py-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


            </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
        <p className='font-roboto text-[16px] text-slate-800'>{totalPrice}</p>

        </div>
    </div>

    </>
  )
}

export default CartItem