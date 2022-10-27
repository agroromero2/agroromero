import { Link } from 'react-router-dom';
function Menuo(toogleOpennew) {

  return (

    <div className="grid grid-rows-4 text-center bg-white-800" onClick={toogleOpennew}>

      <Link to="/Productos" className="p-4 text-black">
        Productos
      </Link>
      <Link to="/lProductos" className="p-4 text-black">
        Lista de Productos
      </Link>
      <Link to="/MVentas" className="p-4 text-black">
        Modificar Ventas
      </Link>
      <Link to="/lVentas" className="p-4 text-black">
        Lista Ventas
      </Link>
      <Link to="/Carrito" className="p-4 text-black">
        Carro
      </Link>
    </div>





  )
}

export default Menuo
