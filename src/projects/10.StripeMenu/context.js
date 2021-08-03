import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) =>  {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // to open and closde the sidebar
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false) // to open and close the submenu
    const [page, setPage] = useState({page:'', links:[]}) // a state used to get the page content after hover on nav page items
    const [location, setLocation] = useState({})

    // Functions to open and close Sidebar
    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    // Functions to show and hide Submenu
    const openSubmenu = (text, coordinates) => {
        // Find the page with the given text
        const page = sublinks.find (link => link.page === text)
        setPage(page) // update page state
        setLocation(coordinates) // update the location of the submenu
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
            page,
            location
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Custome hook to get useContext to avoid multiple imports
export const useGlobalContext = () => useContext(AppContext)
export {AppProvider} 