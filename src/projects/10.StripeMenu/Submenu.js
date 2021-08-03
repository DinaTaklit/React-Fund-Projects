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

  // use useEffect to set the submenu location
  useEffect(() => {
    submenuRef.current.style.top = `${location.bottom}px`
    submenuRef.current.style.left = `${location.center}px`
  }, [page, location, links])

  return (
    <aside className={`submenu ${isSubmenuOpen ? 'show':''}`} ref={submenuRef}>
      <section class="submenu-center">
        <h4>{page}</h4>
        <ul className="col-2">
          {
            links.map((link, index) => {
            const {url, label, icon} = link
             return (
              <li key={index}>
                <a href={url}>
                  {icon}
                  {label}
                </a>
              </li>
             )
            })
          }
        </ul>
      </section>
    </aside>
  )
}

export default Submenu