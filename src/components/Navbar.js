import {useState} from 'react';
import {Link} from 'react-router-dom';
import Carrinho from './carrinho';
import Login from './login';

const Navbar = () => {

  const [clicou, setClicou]=useState(false);

  const handleClick = ()=>{ setClicou(!clicou)}


    return ( 
    <header>
        <nav className="navbar navbar-light bg-light custom-navbar align-items-center">
            <Link className="navbar-brand" to='/'>Rockshop</Link>
            <form className="form" id='busca'>
                <div className="input-group ">
                <input type="text" className="form-control" placeholder="Buscar produtos"   id='campo-busca'/>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id='busca-btn'><i className="fa fa-search "></i></button>
                </div>
                </div>
            </form>
                <Carrinho />
                <Login/>
        </nav>
    </header>
    );
}
 
export default Navbar;