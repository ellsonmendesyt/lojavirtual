
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import ProductList from './components/ProductList'
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProdutoDetails'

import Filler from './components/Filler';
import axios from 'axios';
import React, {useState,useContext,useEffect} from 'react';

import {ProdutoContext} from './contextos/ProdutoContext';

function App() {


  const [produtos,setProdutos]=useState([])
  const [atual,setAtual]=useState(null);

  const buscar= async ()=>{
    const response= await axios('http://localhost:4000/produtos');
    const {data} = response;
   setProdutos(data); //salva os produtos no contexto
 }

  //=====================

  useEffect(()=>{
    buscar()
  },[])


  return (
  
    <Router>
       <Navbar/>
       <Switch >
          <ProdutoContext.Provider value={{ produtos:produtos}}>
           <Route exact path='/' component={ProductList}/>
           <Route  path='/cart' component={Cart}/>
           <Route  path='/details' component={ProductDetails}/>
          </ProdutoContext.Provider>
        
       <Route  component={NotFound}/>
       </Switch>
      
        <Filler />
     </Router>
  );
}


export default App;