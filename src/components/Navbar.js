import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [clicou, setClicou]=useState(false);

  const handleClick = ()=>{ setClicou(!clicou)}


    return ( 
    <header>
        <nav className="navbar navbar-light bg-light custom-navbar align-items-center">
            <Link className="navbar-brand" to='/'>Rockshop</Link>
            <form className="form w-75" id='busca'>
                <div className="input-group ">
                <input type="text" className="form-control" placeholder="Buscar produtos"/>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id='busca-btn'><i className="fa fa-search "></i></button>
                </div>
                </div>
            </form>
            <div className="cart ">
                <Link to='/'><i className="fa fa-cart-arrow-down fa-2x" ></i></Link>
                <Link to='/'><i className="fa fa-sign-in fa-2x ml-3" ></i></Link>
            </div>
        </nav>
    </header>
    );
}
 
export default Navbar;