import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

// Reducer initial state
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  // Dispatch clear cart action when cart is cleared
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // Dispatch the action that Remove an item from cart
  const removeItem = (id) => {
    dispatch ({ type: 'REMOVE_ITEM', id })
  }

  // Dispatch the action that update the amount of items in cart
  const updateAmount = (id, type, amount) => {
    dispatch ({ type: 'UPDATE_AMOUNT', payload: { id, type, amount }})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        updateAmount
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