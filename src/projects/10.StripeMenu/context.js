import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) =>  {
    return (
        <AppContext.Provider value={{  }}>
            {children}
        </AppContext.Provider>
    )
}

// Custome hook to get useContext to avoid multiple imports
export const useGlobalContext = () => useContext(AppContext)
export {AppProvider} 