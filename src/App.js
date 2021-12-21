
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Payment from './Pages/Product/Payment/Payment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/product'>
            <Product></Product>
          </Route>
          <Route exact path='/cart'>
            <Cart></Cart>
          </Route>
          <Route exact path='/checkout'>
            <Checkout></Checkout>
          </Route>
          <Route exact path='/payment'>
            <Payment></Payment>
          </Route>
        
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
