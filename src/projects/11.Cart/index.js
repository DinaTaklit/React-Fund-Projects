import React from 'react'
import { AppProvider} from './context'
import './index.scss'
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function Index() {
  return (
    <div className="cart-use-reducer">
      <AppProvider>
        <main>
          <Navbar />
          <CartContainer />
        </main>
      </AppProvider>
    </div>
  )
}

export default Index