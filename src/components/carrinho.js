import React from 'react'
import {Link} from 'react-router-dom';

function Carrinho() {
    return (
        <div className="carrinho">
                <Link to='/carrinho'><i className="fa fa-cart-arrow-down fa-2x" ></i></Link>
                <div className="carrinho-qtd">2</div>
            </div>
    )
}

export default Carrinho
