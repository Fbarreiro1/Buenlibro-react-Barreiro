import React  from 'react';
import { useState, useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    


    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            totalQuantity, 
            addItem,
            removeItem,
            isInCart,
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext