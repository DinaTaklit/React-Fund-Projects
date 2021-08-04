import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const [totalItems, setTotalItems] = useState(cart.length)

  // Function that clear all the items of the cart
  const clearCart = () =>{
    setCart([])
  }

  // Function to increase the amount of items in the cart
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    const newAmount = cartItem.amount + 1
    setCart(cart.map(item => (item.id === id ? { ...item, amount: newAmount } : item)))
    setTotalItems(prevTotalItems => prevTotalItems + 1)
  }

 // Function to increase the amount of items in the cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    const newAmount = cartItem.amount - 1
    setCart(cart.map(item => (item.id === id ? { ...item, amount: newAmount } : item)))
    setTotalItems(prevTotalItems => prevTotalItems - 1)
  }
  

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        totalItems,
        increaseAmount,
        decreaseAmount
      }} 
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }