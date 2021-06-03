import React,{useState,useEffect,useContext} from 'react'
import Titulo from './Titulo'
import axios from 'axios';
import {ProdutoContext} from '../contextos/ProdutoContext'
import Produto from './Produto'; 
import Carousel from './Carousel'


function ProductList() {
   const value=useContext(ProdutoContext) //traz o contexto
  



    return (
        <>
         <Carousel/>
         <div className="py-5">
             <div className="container">
                 <Titulo nome='Produtos' titulo='em Destaque'/>
                <div className="row">
                    
                     { 
                    
                         value.produtos && value.produtos.map((produto,index)=>{
                           {produto.noCarro? (<p> No carro</p>): (<p>Fora do carro</p>)}
                           return  <Produto key={index} produto={ produto}  />
                         })
                     }
                </div>
             </div>
         </div>
        </>
    )
}




export default ProductList
