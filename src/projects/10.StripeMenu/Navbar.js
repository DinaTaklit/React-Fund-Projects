import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import {useGlobalContext} from './context'

const Navbar = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className=" btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">
              products
            </button>
          </li>
          <li>
            <button className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button className="link-btn">
              compagny
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