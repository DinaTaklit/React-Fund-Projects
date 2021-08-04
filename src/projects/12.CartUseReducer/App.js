import React from 'react'
import { useGlobalContext } from './context'
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'

export default function App() {

    const { loading } = useGlobalContext() // Get the loading states

    if (loading) {
      return (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      )
    }
    
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    )
}
