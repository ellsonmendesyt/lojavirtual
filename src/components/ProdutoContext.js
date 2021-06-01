import React, {createContext,useState} from 'react'

export const ProdutoContext = createContext();

const ProdutoContextProvider = (props)=>{
    const [prods,setProds]=useState(null);


    ///poderia criar mais funcoes e passar no valor
     handleDetail=()=>{
         console.log('ola do detalhe')
     }

     addToCart= ()=>{
         console.log('ola do carrinho')
     }

    return (
        <ProdutoContext.Provider value={{ prods, handleDetail, addToCart }} >
            {props.children}
        </ProdutoContext.Provider>
    );
}


export default ProdutoContextProvider;


/*
   import ProdutoContextProvider
   import useContext 



*/