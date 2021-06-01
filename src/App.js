
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import ProductList from './components/ProductList'
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import {ProductContext} from './components/ProductContext';
import {useState} from 'react';

function App() {

const [produtos,setProdutos]=useState(null);



  return (
  
    <Router>
       <Navbar/>
       
       <Switch >
         <ProductContext.Provider value={{produtos,setProdutos} }>
          <Route exact path='/' component={ProductList}/>
          <Route  path='/cart' component={Cart}/>
         </ProductContext.Provider>

       <Route  component={NotFound}/>
       </Switch>
      
     </Router>
  );
}


export default App;