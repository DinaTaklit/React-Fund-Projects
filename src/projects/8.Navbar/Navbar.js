import { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false) // A state to show the links once we toggle the toggler button
  const linksContainerRef = useRef(null) // UseRef for the links Container to change it is hight once we toggle the button
  const linksRef = useRef(null) // UseRef for the links to get their height

  // Function that toggle the links container
  const toggleLinks = () => setShowLinks(!showLinks)

  // UseEffect that show the links container
  useEffect(() => {
    // get linksHeight dinamically so whenver the size of the height change we can show up them all 
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks) {
      // Add Height to the links container
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      // Set the height of links Container to 0
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(link => {
              const {id, url, text} = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {
            social.map((socialIcon) => {
              const {id, url, icon} = socialIcon
              return (
                <li key={id}>
                  <a href={url}>
                  {icon}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar