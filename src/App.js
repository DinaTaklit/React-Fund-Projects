import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Home from './Home'
import BirthdayReminder from './projects/01-birthday-reminder'
import ToursApp from './projects/2.Tours'
import Reviews from './projects/3.Reviews'
import Accordion from './projects/4.Accordion'
import Menu from './projects/5.Menu'
import Tabs from './projects/6.Tabs'
import Slider from './projects/7.Slider'
import Navbar from './projects/8.Navbar'
import SidebarModal from './projects/9.Sidebar-Modal'
import StripeMenu from './projects/10.StripeMenu'
// import Cart from './projects/11.Cart'
// import CartUseReducer from './projects/12.CartUseReducer'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/birthday-reminder" component={BirthdayReminder}/>
        <Route path="/tours" component={ToursApp}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path="/accordion" component={Accordion}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/tabs" component={Tabs}/>
        <Route path="/slider" component={Slider}/>
        <Route path="/navbar" component={Navbar}/>
        <Route path="/sidebar-modal" component={SidebarModal}/>
        <Route path="/stripe-menu" component={StripeMenu}/>
        {/* <Route path="/cart" component={Cart}/>
        <Route path="/cart-use-reducer" component={CartUseReducer}/> */}
      </Switch>
      <div style={{textAlign:'center', width:'100%'}}>
        <Link to='/' className='global-btn global-btn-primary' >
              back home
          </Link>
      </div>
    </Router>
  );
}

export default App;
