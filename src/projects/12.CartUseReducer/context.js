import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

// Reducer initial state
const initialState = {
  loading: false,
  cart: [],
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

  // Function that fetch date and dispatch the action of displaying items of the cart
  const fetchData = async() => {
    dispatch({ type: 'LOADING' })
    const cart= await fetch(url).then(response => response.json())
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  // Add the useEffect that fetch data
  useEffect(() => {
    fetchData()
  }, [])

  // Add the useEffect that get the totals every time the cart channge
 useEffect(() => {
  dispatch({ type: 'GET_TOTALS' })
 }, [state.cart])

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