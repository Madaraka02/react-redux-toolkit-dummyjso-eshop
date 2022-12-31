import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
     cartItems: localStorage.getItem("CartItems") 
     ? JSON.parse(localStorage.getItem("CartItems")) 
     : [],
     cartTotalQuantity: 0,
     cartTotalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if(itemIndex >=0 ){
                state.cartItems[itemIndex].cartQuantity +=1
                toast.info(`${state.cartItems[itemIndex].title} quantity updated`, {
                    position: "bottom-center",
                })
            }else {
            const tempProduct={ ...action.payload, cartQuantity:1}
            state.cartItems.push(tempProduct)
            toast.info(`${action.payload.title} successfully added to cart`, {
                position: "bottom-center",
            })
            }

            localStorage.setItem("CartItems", JSON.stringify(state.cartItems))
        }

    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer