import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const [totalItems, setTotalItems] = useState(cart.length)

  const clearCart = () =>{
    setCart([])
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        totalItems,
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