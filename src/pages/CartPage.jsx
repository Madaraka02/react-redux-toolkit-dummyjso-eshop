import React from 'react'
import CartItems from '../components/CartItems'
import Header from '../components/Header'

function CartPage() {
  return (
    <>
      <Header />
      <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
      <CartItems />

    </div>
    </>
  )
}

export default CartPage