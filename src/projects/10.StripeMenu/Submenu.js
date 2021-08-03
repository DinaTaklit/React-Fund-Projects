import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen} = useGlobalContext()
  return (
    <aside className={`submenu ${isSubmenuOpen ? 'show':''}`}>
      <section>
        <h3>Submenu</h3>
      </section>
    </aside>
  )
}

export default Submenu