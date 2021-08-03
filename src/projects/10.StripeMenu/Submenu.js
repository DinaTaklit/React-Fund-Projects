import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  // use context to get the global state
  const {
    isSubmenuOpen, 
    page:{page, links},
    location
  } = useGlobalContext()

  const submenuRef = useRef(null) // use a ref to store the submenu to change its location

  // use state to change the width of each link submenu
  const [columns, setColumns] = useState('col-2')

  // use useEffect to set the submenu location
  useEffect(() => {

    // Setup the location of the submenu
    submenuRef.current.style.top = `${location.bottom}px`
    submenuRef.current.style.left = `${location.center}px`

    // Setup the width of the submenu
    if (links.length ===3){
      setColumns('col-3')
    } if (links.length >3){
      setColumns('col-4')
    }

  }, [page, location, links])

  return (
    <aside className={`submenu ${isSubmenuOpen ? 'show':''}`} ref={submenuRef}>
      <h4>{page}</h4>
      <div class={`submenu-center ${columns}`}>
          {
            links.map((link, index) => {
            const {url, label, icon} = link
             return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
             )
            })
          }
      </div>
    </aside>
  )
}

export default Submenu