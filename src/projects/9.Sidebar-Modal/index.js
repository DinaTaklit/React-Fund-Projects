import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import './index.scss'
import { AppProvider } from './context';
function Index() {
  return (
    <div className="sidebar-modal">
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </div>
  )
}

export default Index