import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Cartao from './cartao';

//hardcode images


function Slider({qt}) {
    return (
       <OwlCarousel    autoplay className='owl-theme ' loop responsive={{ 0:{'items':1},600:{'items':2},1000:{'items':5} }}  >
      
       

           <div className="item "><img src={`${process.env.PUBLIC_URL}/assets/produtos/a.jpg`} alt="imagem" /></div>
           <div className="item"><img src={`${process.env.PUBLIC_URL}/assets/produtos/b.jpg`} alt="imagem" /></div>
           <div className="item"><img src={`${process.env.PUBLIC_URL}/assets/produtos/c.jpg`} alt="imagem" /></div>
           <div className="item"><img src={`${process.env.PUBLIC_URL}/assets/produtos/d.jpg`} alt="imagem" /></div>
           <div className="item"><img src={`${process.env.PUBLIC_URL}/assets/produtos/e.jpg`} alt="imagem" /></div>
           <div className="item"><img src={`${process.env.PUBLIC_URL}/assets/produtos/f.jpg`} alt="imagem" /></div>
           
       </OwlCarousel>
    )
}

export default Slider
