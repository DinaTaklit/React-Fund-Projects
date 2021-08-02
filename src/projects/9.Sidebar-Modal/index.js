import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import './index.css'
import { AppProvider } from './context';
function Index() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  )
}

export default Index