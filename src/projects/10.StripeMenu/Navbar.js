import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {

  // use context to open sidebar, open close submenu
  const {openSidebar,openSubmenu, closeSubmenu} = useGlobalContext() 


  // Function that handle the hover on the nav items
  const displaySubmenu = (e) => {
    const page = e.target.textContent // get the current selected nav item link
    const tempBtn = e.target.getBoundingClientRect() // to get the coordinates of the selected link
    const center = (tempBtn.left + tempBtn.right) / 2 // to fix the submenu in the center of the link 
    const bottom = tempBtn.bottom - 3 // to fix the submenu in the bottom of the link
    openSubmenu(page, {center, bottom}) // open the submenu
  }

  // Function that handle the close of submenu once the mouse is out of links
  const handleCloseSubmenu= (e) => {
    if (!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className=" btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar