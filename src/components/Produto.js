import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
function Produto({items,listar}) {

    const {id,titulo,subtitulo,img,noCarro,preco}=items;

    return (
    <ProdutoBox className='col-9 mx-auto col-md-6 col-lg-3 my-3 '>
    <div className="card shop-card " >
        <div className="img-container p-3 " onClick={()=>console.log(`clicou na imagem ${titulo}`)}>
         <Link to="/details" >
            <img src={`${process.env.PUBLIC_URL}/assets/produtos/${img}`} className="card-img-top" alt="..."/>
          </Link>
        </div>
        {/* <h5 className="card-title">{titulo}</h5> */}
        {/* <p className="card-text">{titulo}</p> */}

        <button className='btn btn-outline-warning' disabled={noCarro ? true: false}  onClick={()=>{
        console.log(`adicionado  ${titulo} ao Carro`)}} >
        {noCarro ? (<p className='text-capitalized mb-0' disabled>{`no carinho`}</p>):(<i className="fa fa-shopping-cart " aria-hidden="true"> adicicionar</i>)}
        </button>
        <div className="card-footer d-flex justify-content-between">
            <p className='align-self-center mb-0'>{titulo}</p>
            <h5 className='text-info font-italic mb-0'> <span className='mr-1'>R$</span>{preco}</h5>
           
        </div>
    </div>
    </ProdutoBox>
  )
}


const ProdutoBox = styled.div`
 display:flex;
 justify-content-stretch;
 border:none;
 transition:all .4s ease-in-out;
 background-color:#fff;
 &:hover{box-shadow: 2px 1px 7px rgba(0,0,0,0.2)} 
 .card:border-radius:40px !important;
 .card, .card-footer{
     border:none !important;
 }
 .img-container{
     position:relative;
     overflow:hidden;
 }

 .card-img-top{transition: all .4s  1s ease-in-out;}
 .img-container:hover .card-img-top{
     transform:scale(1.07)
 }

`;

export default Produto
