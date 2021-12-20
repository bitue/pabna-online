
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';

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
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
