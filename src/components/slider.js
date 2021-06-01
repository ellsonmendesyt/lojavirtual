import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Cartao from './cartao';

//hardcode images


function Slider({qt}) {
    return (
        
       <OwlCarousel    autoplay className='owl-theme ' center loop responsive={{ 0:{'items':2},600:{'items':3},1000:{'items':5} }}  dots={false} >
      
          <Cartao img='a.jpg' titulo='titulo' subtitulo='subtitulo' />
          <Cartao img='b.jpg' titulo='titulo' subtitulo='subtitulo' />
          <Cartao img='c.jpg' titulo='titulo' subtitulo='subtitulo' />
          <Cartao img='d.jpg' titulo='titulo' subtitulo='subtitulo' />
          <Cartao img='e.jpg' titulo='titulo' subtitulo='subtitulo' />
       </OwlCarousel>
    )
}

export default Slider
