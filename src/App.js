import './App.css';
import Productpage from './components/Body/Productpage';
import Productfooter from './components/Footer/Productfooter';
import Header from './components/navigation-bar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './features/productstore/store';
import SingleItemdetail from './components/Body/SingleItemdetail';

function App() {

  return (
    <div className="App">
      <Router>
      <Provider store={store} >
     <Header  />
     <Switch >
         <Route path='/' exact component={Productpage} />
     <Productfooter />
     </Switch>
     </Provider >
     </Router>
    </div>
  );
}

export default App;
