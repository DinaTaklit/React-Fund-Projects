import React from 'react'
import { AppProvider,useGlobalContext } from './context'
import './index.css'
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function Index() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  )
}

export default Index