import React from 'react'
import { AppProvider} from './context'
import './index.css'
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function Index() {
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