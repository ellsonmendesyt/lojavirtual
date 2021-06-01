import React,{useState,useEffect,useContext} from 'react'
import Titulo from './Titulo'
import axios from 'axios';
import {ProdutoContext} from '../contextos/ProdutoContext'
import Produto from './Produto'; 



function ProductList() {
   const {produtos,setProdutos,listar}=useContext(ProdutoContext)
    const buscar= async ()=>{
       const response= await axios('http://localhost:4000/produtos');
       const {data} = response;
      setProdutos(data);
    }

    useEffect(()=>{
      buscar();
      listar();
    },[])
    return (
        <>
         <div className="py-5">
             <div className="container">
                 <Titulo nome='Produtos' titulo='em Destaque'/>
                <div className="row">
                    <div className="col d-flex justify-content-around">
                     {
                         produtos && produtos.map((produto,index)=>{

                           return <Produto key={index} produto={produto} />
                            //  return <div key={index}  className='d'>
                            //      <img  src={`${process.env.PUBLIC_URL}/assets/produtos/${p.img}`} className=" img-fluid" alt="item"/>
                            //  </div>
                         })
                     }
                    </div>
                </div>
             </div>
         </div>
        </>
    )
}

export default ProductList
