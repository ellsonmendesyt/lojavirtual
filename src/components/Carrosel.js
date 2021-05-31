import filme from '../assets/carrossel/quarto.jpg';
import estudo from '../assets/carrossel/calor.jpg';
import joice from '../assets/carrossel/energeticos.jpg';
import {useState} from 'react';




export default function Carrossel() {

        const [base, setBase]=useState('../assets/carrossel/');


       const [dados,]=useState([
           {img:filme,titulo:'FALEMAIS30',subtitulo:'Ideal para quem gosta de ficar conectado'},
           {img:estudo,titulo:'FALEMAIS60',subtitulo:'Um plano para a familia toda'},
           {img:joice,titulo:'FALEMAIS120',subtitulo:'Falador e internautas hard core'}
        ])



    return (
        <div id="hero"  className="carousel slide  w-100" data-ride="carousel">
        <div className="carousel-inner">
          {dados.map((dado,index)=>
            <div className={index===0 ? 'carousel-item active ': 'carousel-item '} key={dado.titulo}>
              {console.log(index)}
            <img src={dado.img} className="d-block w-100 " />
            <div className="carousel-caption d-none d-md-block">
                <h5>{dado.titulo}</h5> 
                <p>{dado.subtitulo}</p>

                {console.log(base)}
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