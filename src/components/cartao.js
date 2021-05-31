import React from 'react'
import {Link} from 'react-router-dom';

function Cartao({img,titulo,subtitulo}) {
    return (
        <div className="card card-custom " >
        <img src={`${process.env.PUBLIC_URL}/assets/produtos/${img}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{subtitulo}</p>
          <Link to="/" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    )
}

export default Cartao
