import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [clicou, setClicou]=useState(false);

  const handleClick = ()=>{ setClicou(!clicou)}


    return ( 
    <header>
        <nav className="navbar navbar-light bg-light custom-navbar">
            <Link className="navbar-brand">Rockshop</Link>
            <form className="form-inline">
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar produtos"/>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i></button>
                </div>
                </div>
            </form>
        </nav>
    </header>
    );
}
 
export default Navbar;