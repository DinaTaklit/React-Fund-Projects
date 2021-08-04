import React from 'react'
import { AppProvider } from './context'
import './index.css'
import App from './App'


function Index() {
  return (
    <AppProvider>
      <App/>
    </AppProvider>
  )
}

export default Index