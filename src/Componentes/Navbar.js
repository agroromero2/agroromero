import logoAgr from "../img/logoAgr.png"
import { Link } from 'react-router-dom';

function Navbar({ toogleOpen }) {
    return (
        <nav className="flex  justify-between items-center h-20 bg-white text-black relative shadow-sm">
            <Link to="/" className="pl-8">
                <img src={logoAgr} alt="imagen" className='w-16 rounded-full' />
            </Link>
            <div><h1 className="text-emerald-700 non-italic decoration-solid text-5xl  fw-bold">AGROROMERO</h1></div>
            <div className="px-4  cursor-pointer md:hidden" onClick={toogleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="pr-8 cursor-pointer hidden md:block">
                <Link to="/Productos" className="p-4">
                    Productos
                </Link>

                <Link to="/lProductos" className="p-4">
                    Lista de Productos
                </Link>
                <Link to="/lProductosAdmin" className="p-4">
                    Lista de Productos Admin
                </Link>
                <Link to="/Mproducto" className="p-4 text-black">
                    Modificar Productos
                </Link>
                <Link to="/MVentas" className="p-4">
                    Movimiento Ventas
                </Link>
                <Link to="/lVentas" className="p-4">
                    Lista Ventas
                </Link>

                <Link to="/Carrito" className="p-4">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>



                </Link>
                {/*
                <Link to="/Ingreso" className="p-4">
                    Ingreso
                </Link>
                <Link to="/Registro" className="p-4">
                    Registro
                </Link>
*/}
            </div>
        </nav>
    )
}

export default Navbar