import React, { useState, useContext, useEffect } from 'react'
import cartItems from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const [totalItems, setTotalItems] = useState(cart.length)
  const [totalPrice, setTotalPrice] = useState(0)

  // Function that clear all the items of the cart
  const clearCart = () =>{
    setCart([])
  }

  // Function that update the amount of items in the cart
  const updateAmount = (id, amount) => {

    const cartItem = cart.find(item => item.id === id) //Get the item with the given id
    const newAmount = cartItem.amount + amount // calculate the new amount
    
    // If the number of items is 0 remove the item from the cart
    if(newAmount ===0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item => (item.id === id ? { ...item, amount: newAmount } : item)))
    } 
    // update the total amount of items
    setTotalItems(prevTotalItems => prevTotalItems  + amount) 
  }
  
  // Function that calculate the totlal price of the items in the cart
  const calculateTotalPrice = () => {
    let total = 0
    cart.forEach(item => total += item.price * item.amount)
    setTotalPrice(total.toFixed(2))
  }

  // Function that remove an item from the cart
  const removeItem = (id) => {
    const item = cart.find(item => item.id === id)
    setTotalItems(prevTotalItems => prevTotalItems  - item.amount)
    setCart(cart.filter(item => item.id !== id))
  }

  // Use Effect to update the total price everytime the cart, total items is updated
  useEffect(() => {
    calculateTotalPrice()
  }, [cart, totalItems])

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        totalItems,
        updateAmount,
        totalPrice,
        removeItem
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