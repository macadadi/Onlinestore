import './App.css';
import Productpage from './components/Body/Productpage';
import Productfooter from './components/Footer/Productfooter';
import Header from './components/navigation-bar/Navbar';

import { Provider } from 'react-redux'
import store from './features/productstore/store';

function App() {

  return (
    <div className="App">
      <Provider store={store} >
     <Header  />
     <Productpage />
     <Productfooter />
     </Provider >
    </div>
  );
}

export default App;
