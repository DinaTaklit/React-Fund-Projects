import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import './index.scss'
import { AppProvider } from './context';
function Index() {
  return (
    <div className="stripe-menu">
      <AppProvider>
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <Submenu/>
      </AppProvider>
    </div>
  )
}

export default Index