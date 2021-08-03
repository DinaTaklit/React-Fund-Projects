import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const {links, page} = item
            return (
              <article key={index}>
                <h3>{page}</h3>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const {url, icon, label} = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar