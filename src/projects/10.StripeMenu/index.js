import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import './index.css'
import { AppProvider } from './context';
function Index() {
  return (
    <AppProvider>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </AppProvider>
  )
}

export default Index