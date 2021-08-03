import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) =>  {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // to open and closde the sidebar
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false) // to open and close the submenu
    
    // Functions to open and close Sidebar
    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    // Functions to show and hide Submenu
    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => setIsSubmenuOpen(false)

    return (
        <AppContext.Provider value={{  
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            closeSubmenu,
            openSubmenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Custome hook to get useContext to avoid multiple imports
export const useGlobalContext = () => useContext(AppContext)
export {AppProvider} 