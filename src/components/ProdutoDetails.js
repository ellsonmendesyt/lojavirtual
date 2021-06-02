import React,{useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import ProdutoContext from '../contextos/ProdutoContext';

function ProdutoDetails() {

   const value = useContext(ProdutoContext);

    return (
        <div>
        {value && console.log(value)}
            <h3>Imagem</h3>
            <h5>Nome</h5>
            <h6>descricao</h6>
            <p>preco</p>
        </div>
    )
}

export default ProdutoDetails
