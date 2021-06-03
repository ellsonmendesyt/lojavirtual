import React,{useContext,useState,useEffect} from 'react'


import {ProdutoContext} from '../contextos/ProdutoContext';


function Cart() {

    const loja = useContext(ProdutoContext);
   const [total,setTotal]=useState(0);
  


   useEffect(()=>{
     setTotal(loja.calcularTotal().toFixed(2));
     
   },[loja.meuCarrinho]);

  


    return (
      <div className='container carrinho'>
          <div className="row">
              <div className="col-10 mx-auto my-3">
                  <h5>Carrinho de compras</h5>
              </div>
          </div>
          <div className="row">
              <div className="col-9 mx-auto col-md-10">
                  <table className="table">
                  <tbody>
                  {loja.meuCarrinho.length > 0 && loja.meuCarrinho.map((p)=>{
                    return(
                        
                      <tr key={p.id}>
                          
                          <td>{ <img src={`${process.env.PUBLIC_URL}/assets/produtos/${p.img}`} alt="" className='produto-thumbnail' /> }</td>
                          <td> {p.titulo}</td>
                          <td> {p.subtitulo}</td>
                          <td> <span>{`R$ `}</span> {p.preco}</td>

                          <td> <span>{`qt `}</span> {p.quantidade} <button onClick={(p)=>p.quantidade+1}>+</button> </td>


                          <td> <button className='btn btn-primary btn-sm' onClick={()=>loja.tirarDoCarrinho(p)}>remover</button> </td>
                        
                        
                      </tr>  

                    
                      
                    )
                })}
                  </tbody>
                </table>
              </div>
          </div>
         <div className='row'>
             <div className="col-10 mx-auto">
             <h5 className='text-right'>Total R$ {total}</h5>
             <button className="btn btn-primary">Confirmar</button>

             </div>
         </div>
      </div>
    )
}
export default Cart


/*
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













    {
            loja.meuCarrinho.length > 0 && loja.meuCarrinho.map((p)=>{
                return(
                    <div className='container carrinho my-5 '>
                        <h3> COMPRAS</h3>

                    </div>
                )
            })
        }



*/