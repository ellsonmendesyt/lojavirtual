import React from 'react'
import Carrossel from './carrosel';
import Slider from './slider';




function Home() {


    return (
        <div className='container-fluid '>
         <div className="row">
             <div className="col">

            <Carrossel/>
             </div>

         </div>
      
      <div className="row my-5">
          <div className="col d-flex justify-content-around">

            <Slider/>
          </div>
      </div>
     
       
            
        </div>
    )
}

export default Home
