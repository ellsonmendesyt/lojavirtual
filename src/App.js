
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
  const [meuCarrinho,setMeuCarrinho]=useState([]); ///meu carrinho começa vazio
  const [quantidade,setQuantidade]=useState(0);



  const porNoCarrinho = (produto)=>{
  
    let jaTem=false;
     for(let i=0;i<meuCarrinho.length;i++){
       if(meuCarrinho[i].id === produto.id){
        jaTem=true;
       }
     }
      if(jaTem){
        console.log('ja tem')
        return;
      }else{
        produto={...produto,quantidade:1} ///cria o campo propriedade
        setMeuCarrinho([...meuCarrinho,produto]); //add o prodtuo ao carrinho
        console.log('nao')
      }
   
  }

 const tirarDoCarrinho=(produto)=>{
   
   let copia = [...meuCarrinho]
   copia = copia.filter(atual =>{
     return atual.id !== produto.id
   })

   
   setMeuCarrinho(copia)
 }



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
          <ProdutoContext.Provider value={{ produtos,meuCarrinho,setMeuCarrinho,porNoCarrinho,quantidade,setQuantidade,tirarDoCarrinho}}>
       <Navbar/>
       <Switch >
           <Route exact path='/' component={ProductList}/>
           <Route  path='/cart' component={Cart}/>
           <Route  path='/details' component={ProductDetails}/>
        
       <Route  component={NotFound}/>
       </Switch>
          </ProdutoContext.Provider>
      
        <Filler />
     </Router>
  );
}


export default App;