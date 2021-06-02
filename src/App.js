
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import ProductList from './components/ProductList'
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProdutoContextProvider from './contextos/ProdutoContext';
import ProductDetails from './components/ProductDetails'
import {useState} from 'react';
import Filler from './components/Filler';

function App() {

  return (
  
    <Router>
       <Navbar/>
      
       <Switch >
          <ProdutoContextProvider>
           <Route exact path='/' component={ProductList}/>
           <Route  path='/cart' component={Cart}/>
           <Route  path='/details' component={ProductDetails}/>
          </ProdutoContextProvider>
        
       <Route  component={NotFound}/>
       </Switch>
      
        <Filler />
     </Router>
  );
}


export default App;