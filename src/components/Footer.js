import React from 'react'

function Footer() {
    return (
        <div className="container-fluid  footer ">
            <div className='row bg-white py-4'>
            <div className="col-md-4 mx-auto  text-muted px-lg-5 pt-4">
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Rua 16, 678 São Francisco, 
            Bloco 2B – Sala 2
            65636-766 – Timon
            Maranhão, MA</p>
            </div>
            <div className="col-md-4 px-lg-5 pt-4">

           <ul className="nav flex-column  text-muted ">
               <li className="nav-item "><i class="fa fa-envelope" aria-hidden="true"></i> contato@rockapp.com.br</li>
               <li className="nav-item"><i class="fa fa-phone-square" aria-hidden="true"></i> +55(11)  93957-8829</li>
               <li className="nav-item"><i class="fa fa-phone-square" aria-hidden="true"></i> +55 (21) 988992-8108</li>
               <li className="nav-item"><i class="fa fa-phone-square" aria-hidden="true"></i> +55 (99) 98841-8596</li>
           </ul>
            </div>
            <div className="col-md-4  text-muted px-lg-5 pt-4">
            <ul className="nav flex-column text-muted">
                <li className="nav-item"><i class="fa fa-facebook-official mr-1" aria-hidden="true"></i>rockapps@facebook</li>
                <li className="nav-item"><i class="fa fa-instagram mr-1" aria-hidden="true"> rockapps@instagram</i></li>
                <li className="nav-item"><i class="fa fa-linkedin mr-1" aria-hidden="true"></i>rockapps@linkedin</li>
                <li className="nav-item"><i class="fa fa-whatsapp mr-1" aria-hidden="true"></i>+55 (99) 9884-8596</li>
            </ul>
            </div>
        </div>
        <div className="row bg-white">
            <div className="col text-center">
                <p>Copyright &copy; RockApps </p>
            </div>
        </div>
        </div>
    )
}

export default Footer
