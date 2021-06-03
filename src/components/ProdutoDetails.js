import React,{useContext, useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {ProdutoContext} from '../contextos/ProdutoContext';

function ProdutoDetails(props) {

    
   const value = useContext(ProdutoContext);
   var produtoAtual = props.location.state; 
   
 
  
    return (
     <div className="container bg-white">
         <div className="row my-5">
             <div className="col-md-7 d-flex  justify-content-start">
                 <div className="img-preview w-75 " style={{ minHeight:'200px',maxHeight:'400px',backgroundColor:'white',padding:0 }}>
                 <img src={`${process.env.PUBLIC_URL}/assets/produtos/${produtoAtual.img}`} alt="" className='img-full '/>
                 </div>
             </div>
             <div className="col-md-5 " >
                <div className="card p-3 my-4">
                    <div className="card-header bg-white ">
                        <div className='d-flex justify-content-between'>
                        <div className='text-muted'>Novo | 120 vendidos</div> 
                        <div><svg  xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"><g strokeWidth="1.0" fill='transparent'><path stroke="#3483FA" d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"></path></g></svg></div>
                        </div>
                        <h5 className='card-title '>{produtoAtual.subtitulo}</h5>
                    </div>
                    <div className="card-body ">
                        <h3 className='mt-5 mb-0 '><span>R$ </span> {produtoAtual.preco}</h3>
                        <p>Em 12x sem juros no cartão</p>
                        <p className='text-success'><svg xmlns="http://www.w3.org/2000/svg" stroke='#00A650' width="18" height="15" viewBox="0 0 18 15"><path  d="M7.763 12.207a2.398 2.398 0 0 1-4.726 0H1.8a1.8 1.8 0 0 1-1.8-1.8V2.195a1.8 1.8 0 0 1 1.8-1.8h8.445a1.8 1.8 0 0 1 1.8 1.8v.568l3.322.035L18 6.821v5.386h-2.394a2.398 2.398 0 0 1-4.727 0H7.763zm-.1-1.2h3.182V2.195a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v8.212a.6.6 0 0 0 .6.6h1.337a2.399 2.399 0 0 1 4.526 0zm7.843 0H16.8V7.179l-2.086-3.187-2.669-.029v5.76a2.399 2.399 0 0 1 3.461 1.284zm-2.263 1.99a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396zm-7.843 0a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396z"></path></svg>
                           <span>  Chegará gratis <span className='font-weight-bold'>sexta-feira</span></span> 
                        </p>
                        <Link to='/'>ver mais formas de entrega</Link>
                        <h6 className='text-muted'>Estoque Disponivel</h6>
                        <p>Quantidade: 1 unidade</p>
                    </div>
                    <div className="card-footer">
                        <Link to='/' className='btn btn-primary btn-block'>Comprar agora</Link>
                        <Link to='/' className='btn btn-primary btn-block'>Adicionar ao Carrinho</Link>
                    </div>
                </div>
             </div>
         </div>
         {/* outra fila */}
         <div className="row mb-4">
             <div className="col-md-7">
                 <label htmlFor="pergunta-ao-vendedor"><h5>Pergunta ao vendedor</h5></label>
                 <div className="form-group d-flex">
                 <input type="text" placeholder='Escreva sua pergunta' className='form-control' id='pergunta-ao-vendedor'/>
                 <button className="btn btn-primary ml-3">Perguntar</button>
                 </div>
             </div>
             <div className="col-md-5">
                <div className="card p-3 my-4">
             <ul class="list-group list-group-horizontal my-3 ">
                <li class="list-group-item border-0"><img src={`${process.env.PUBLIC_URL}/assets/outros/visa.png`} alt="" /></li>
                <li class="list-group-item border-0"><img src={`${process.env.PUBLIC_URL}/assets/outros/pix.png`} alt="" /></li>
                <li class="list-group-item border-0"><img src={`${process.env.PUBLIC_URL}/assets/outros/master.png`} alt="" /></li>
                <li class="list-group-item border-0"><img src={`${process.env.PUBLIC_URL}/assets/outros/boleto.png`} alt="" /></li>
            </ul>
                </div>
             </div>
         </div>
     </div>   
    
    )
}

export default ProdutoDetails

/**
 
 <button onClick={()=>{
           produtoAtual.noCarro=false;
           console.log(produtoAtual)
        }}>Por no carro</button>

 */