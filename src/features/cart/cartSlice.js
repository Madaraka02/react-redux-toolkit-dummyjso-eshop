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
                toast.info(`${state.cartItems[itemIndex].title} quantity increased`, {
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
        },
        removeFromCart(state, action){
            // this returns the items which are not equal to the action.payload.id
            const remainingCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id)

                state.cartItems=remainingCartItems
                localStorage.setItem("CartItems", JSON.stringify(state.cartItems))
                toast.error(`${action.payload.title} was removed from cart`, {
                    position: "bottom-center",
                })
                

        },
        decreaseCartItemQuantity(state, action){
            const cartItemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id)

                if(state.cartItems[cartItemIndex].cartQuantity >1 ){
                    state.cartItems[cartItemIndex].cartQuantity -= 1

                    toast.success(`Decreased ${action.payload.title} quantity`, {
                        position: "bottom-center",
                    })
                }else if(state.cartItems[cartItemIndex].cartQuantity ===1){
                                // this returns the items which are not equal to the action.payload.id
                    const remainingCartItems = state.cartItems.filter(
                        (cartItem) => cartItem.id !== action.payload.id)

                        state.cartItems=remainingCartItems
                        toast.error(`${action.payload.title} was removed from cart`, {
                            position: "bottom-center",
                        })
                        
                        
                    }
                    
                    localStorage.setItem("CartItems", JSON.stringify(state.cartItems))

        },
        clearCart(state, action){
            state.cartItems = []
            toast.error(`Cart was successfully cleared`, {
                position: "bottom-center",
            })
            localStorage.setItem("CartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action){
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                // cartTotal (the accumulator ) initially hold the total and quantity

                // cartItem is the item we will be getting each time the method runs
                
                const { price, cartQuantity } = cartItem
                const cartItemTotal = price * cartQuantity

                cartTotal.total += cartItemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0,
            })
            state.cartTotalQuantity=quantity
            state.cartTotalAmount=total
        } 

    }
})

export const { addToCart, removeFromCart, decreaseCartItemQuantity, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer