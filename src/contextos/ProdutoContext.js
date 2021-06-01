import React, { createContext,useState} from 'react'


export const ProdutoContext=createContext();




//funcionalidades que queremos repasar
const listar=()=>{
    console.log('listando...')
}


const  ProdutoContextProvider=(props)=> {
    const [produtos,setProdutos]=useState([])
    return (
        <ProdutoContext.Provider value={{ produtos,setProdutos,listar}}>
            {props.children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoContextProvider




