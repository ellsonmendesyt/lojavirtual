import React from 'react'

function Produto({items,listar}) {
    return (
        <div className='d'>
           {items.img}
           <p>{listar()}</p>
        </div>
    )
}

export default Produto
