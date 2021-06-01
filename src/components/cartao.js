import React from 'react'
import {Link} from 'react-router-dom';

function Cartao({img,titulo,subtitulo}) {
    return (
        <div className="card card-custom mx-3 " >
       
        <div className="card-body">
        <img src={`${process.env.PUBLIC_URL}/assets/produtos/${img}`} className=" img-fluid" alt="item"/>
        </div>
        <div className="card-footer ">

          <h6 className="card-title ">{titulo}</h6>
          <p className="card-text ">{subtitulo}</p>
          <Link to="/" className="btn btn-primary">comprar</Link>
        </div>
      </div>
    )
}

export default Cartao
