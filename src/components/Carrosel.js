
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Carrossel() {
        const [dados, setDados]=useState([]);

      const buscar = async ()=>{
        const {data} = await axios('http://localhost:4000/carroseis')
          console.log(data);
          setDados(data);
      }

      useEffect(()=>{
        buscar();
      },[]);

  
    return (
        <div id="hero"  className="carousel slide  w-100" data-ride="carousel">
        <div className="carousel-inner">
          {dados && dados.map((dado,index)=>           
            <div className={index===0 ? 'carousel-item active ': 'carousel-item '} key={dado.titulo}>
              {console.log(index)}
            <img src={`${process.env.PUBLIC_URL}/assets/carrossel/${dado.img}`} className="d-block w-100 " />
            <div className="carousel-caption d-none d-md-block">
                <h5>{dado.titulo}</h5> 
                <p>{dado.subtitulo}</p>
                {console.log(dado.img)}
            </div>
            </div>
          )}
        </div>

        <a className="carousel-control-prev" href="#hero" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" ></span><span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#hero" role="button" data-slide="next">
            <span className="carousel-control-next-icon" ></span><span className="sr-only">Next</span>
        </a>
     </div>    
    )
}