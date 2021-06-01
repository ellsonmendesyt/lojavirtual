import React,{useState,useEffect,useContext} from 'react'

import Product from './Product'
import {ProductContext} from './ProductContext';

import Titulo from './Titulo'

import axios from 'axios';
function ProductList() {
    const {produtos,setProdutos}=useContext(ProductContext)
   
    

    const buscar= async ()=>{
       const response= await axios('http://localhost:4000/produtos');
       const {data} = response;
        setProdutos(data);
    }

    useEffect(()=>{
      buscar();
    },[])
    return (
        <>
         <div className="py-5">
             <div className="container">
                 <Titulo nome='Produtos' titulo='em Destaque'/>
                <div className="row">
                    <div className="col d-flex justify-content-around">
                     {
                         produtos && produtos.map(p=>(
                             <div key={p.id} className=''>
                                 <img src={`${process.env.PUBLIC_URL}/assets/produtos/${p.img}`} className=" img-fluid" alt="item"/>
                             </div>
                         ))
                     }
                    </div>
                </div>
             </div>
         </div>
        </>
    )
}

export default ProductList
