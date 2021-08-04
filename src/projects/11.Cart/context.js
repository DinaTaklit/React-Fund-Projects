import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const [totalItems, setTotalItems] = useState(cart.length)
  const [totalPrice, setTotalPrice] = useState(0)
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
    
    if(newAmount ===0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item => (item.id === id ? { ...item, amount: newAmount } : item)))
    } 
    setTotalItems(prevTotalItems => prevTotalItems - 1) 
  }
  
  // Function that calculate the totlal price of the items in the cart
  const calculateTotalPrice = () => {
    let total = 0
    cart.forEach(item => total += item.price * item.amount)
    setTotalPrice(total.toFixed(2))
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [cart, totalItems])

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        totalItems,
        increaseAmount,
        decreaseAmount,
        totalPrice
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