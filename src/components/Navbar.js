import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

//   const [clicou, setClicou]=useState(false);

//   const handleClick = ()=>{ setClicou(!clicou)}


    return ( 
    <header>
        <nav className="navbar navbar-light bg-light custom-navbar align-items-center">
            <Link className="navbar-brand" to='/'>Rockshop</Link>
            <form className="form " id='busca'>
                <div className="input-group ">
                <input type="text" className="form-control" placeholder="Buscar produtos"   id='campo-busca'/>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id='busca-btn'><i className="fa fa-search "></i></button>
                </div>
                </div>
            </form>
            <Link to='/cart'>
                <ButtonContainer>
                    <span className='mr-2'><i className="fa fa-cart-arrow-down " ></i></span>
                    carrinho
                </ButtonContainer>
                </Link>
            <Link to='/login'><i className="fa fa-sign-in fa-2x ml-3" ></i> </Link>
        </nav>
    </header>
    );
}
 
const ButtonContainer= styled.button`
 
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
`

export default Navbar;