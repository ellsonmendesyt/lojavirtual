import React, { createContext,useState} from 'react'

export const ProdutoContext=createContext();

const listar=()=>{return 'listando...';}

const addToCart=()=>{console.log('adicionando ao carrinho')}

const  ProdutoContextProvider=(props)=> {

    //produtos do banco de dados
    const [produtos,setProdutos]=useState([])
    ///produtods 
    return (
        <ProdutoContext.Provider value={{produtos:produtos,setProdutos:setProdutos,listar:listar,addToCart:addToCart}}>
            {props.children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoContextProvider




