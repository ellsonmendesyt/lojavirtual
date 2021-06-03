import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'

import {ProdutoContext} from '../contextos/ProdutoContext';


function Cart() {

    const loja = useContext(ProdutoContext);
    return (
        <div>
            <h4>Suas Compras</h4>   
        {
            loja.meuCarrinho.length > 0 && loja.meuCarrinho.map((p)=>{
                return(
                    < div className='alert alert-info d-flex' style={{ width:'300px',fontWeight:'bold' }} key={p.id}>
                        <div className="detalhes">
                        <p className='mb-0'>nome: <span className='text-danger'>{p.titulo}</span></p>
                        <p className='mb-0'>desc: {p.subtitulo}</p>
                        <p className='mb-0'> qt: {p.quantidade}</p>
                         <p className='mb-0'>{p.noCarro ? 'sim':'nao'}</p>
                        </div>
                         <button className='btn btn-primary ' style={{ height:'30px' }} onClick={()=>{
                             p.noCarro=false;
                             loja.tirarDoCarrinho(p);
                         }}>remove</button>
                    </div>
                )
            })
        }



            <Link to="/">Continuar comprando</Link>       
        </div>
    )
}
export default Cart
