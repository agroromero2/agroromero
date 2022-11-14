import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({carItems}) => {
    return (
        <header className='header'>
            <div>
                <h1>
                <Link to="/" className='logo'>
                    Agroromero
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                     <li>
                         <Link to="/">Inicio</Link>
                     </li>
                </ul>
                <ul>
                     <li>
                         <Link to="/ingreso">Ingreso</Link>
                     </li>
                </ul>
                <ul>
                     <li>
                         <Link to="/AdmonProductos">AdmonProductos</Link>
                     </li>
                </ul>
				<ul>
                     <li>
                         <Link to="/ListaVentas">ListaVentas</Link>
                     </li>
                </ul>
                <ul>
                     <li>
                         <Link to="/carro" className='cart'>
                            <i className='fas fa-shopping-cart'/>
                            <span className='cart-length'>
                                {carItems.length === 0 ? "" : carItems.length}
                            </span>
                            </Link>
                     </li>
                </ul>
            </div>

        </header>
    )
}

export default Header