import React,{useState,useEffect,useContext} from 'react'
import Titulo from './Titulo'
import axios from 'axios';
import {ProdutoContext} from '../contextos/ProdutoContext'
import Produto from './Produto'; 
import Carousel from './Carousel'


function ProductList() {
   const value=useContext(ProdutoContext) //traz o contexto
    const buscar= async ()=>{
       const response= await axios('http://localhost:4000/produtos');
       const {data} = response;
      value.setProdutos(data); //salva os produtos no contexto
    }
    useEffect(()=>{
      buscar();
    },[])
    return (
        <>
         <Carousel/>
         <div className="py-5">
             <div className="container">
                 <Titulo nome='Produtos' titulo='em Destaque'/>
                <div className="row">
                     { 
                         value.produtos && value.produtos.map((produto,index)=>{

                           return <Produto key={index} items={ produto}  />
                         })
                     }
                </div>
             </div>
         </div>
        </>
    )
}




export default ProductList
