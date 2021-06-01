// import React,{useState,useEffect} from 'react'
// import OwlCarousel from 'react-owl-carousel'
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Cartao from './cartao';

// import useFetch from './useFetch';
// //hardcode images


// function Slider() {
   
//   const url='http://localhost:4000/produtos';
//   const {data:produtos,carregando,erro} =useFetch(url);
//   const [items, setItems]=useState([]);
   


//     useEffect(()=>{
//        setItems(produtos);
     
//     },[]);

//     return (



     
//        <OwlCarousel    autoplay className='owl-theme '  loop responsive={{ 0:{'items':2},600:{'items':3},1000:{'items':5} }}  dots={false} > 
      
//        {items.map((p)=>
//          <Cartao produto={p} />  
//        )}
//        </OwlCarousel>
        
         
     
//     )
// }

// export default Slider
