import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MAIN_HOMEPAGE } from '../routes'
import CartItem from './CartItem'

function CartItems() {
    const cart = useSelector((state) => state.cart)
  return (
    <>
    <div className="flex flex-row gap-5 w-full">
    {cart.cartItems.length === 0 ?

    <div className="flex flex-col gap-2 items-center justify-center">

        <p className='font-roboto text-[16px] text-slate-800'>You don't have items in your cart</p>
        <Link to={MAIN_HOMEPAGE}>
            <button className='text-center font-roboto text-white bg-slate-800 rounded-md px-6 py-3'>

            Go back to shopping
            </button>
            </Link>
    </div>

    :
    <>
    <div className="flex flex-col gap-2 w-3/4">

        {cart.cartItems?.map((cartItem) => (

        <CartItem 
        product={cartItem}
        title={cartItem.title}
        price={cartItem.price}
        quantity={cartItem.cartQuantity}
        image={cartItem.thumbnail}
        totalPrice={cartItem.price * cartItem.cartQuantity}
        />
        ))}

    </div>
    <div className="flex flex-col gap-2 w-1/4">
        Menu
    </div>
    </>
    }
    </div>
    </>
  )
}

export default CartItems