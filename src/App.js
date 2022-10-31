import React, { useState } from 'react'
import data from './Componentes/back/data/data'
import Header from './Componentes/front/Header/Header';
import Routes from './Componentes/front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylos/Productos.css';
import './stylos/carro.css';
import './stylos/header.css';
import './stylos/Ingreso.css';

const App = () => {
  const { productosItems } = data;
  const [carItems, setCarItems] = useState([]);


  const handleAddProducto = (product) => {
    const ProductoExiste = carItems.find((item) => item.id === product.id);
    if (ProductoExiste) {
      setCarItems(
        carItems.map((item) =>
          item.id === product.id
            ? { ...ProductoExiste, quantity: ProductoExiste.quantity + 1 }
            : item)
      );
    } else {
      setCarItems([...carItems, { ...product, quantity: 1 }]);
    }
    console.log(product)
  };

  const handleEliminaProducto = (product) => {
    const ProductoExiste = carItems.find((item) => item.id === product.id);
    if (ProductoExiste.quantity === 1) {
      setCarItems(carItems.filter((item) => item.id !== product.id));
    } else {
      setCarItems(
        carItems.map((item) => item.id === product.id ? { ...ProductoExiste, quantity: ProductoExiste.quantity - 1 } : item)
      );
    }
  };
  const handleCartClearence=()=>{
    setCarItems([]);
  }



  return (
    <div>
      <Router>
        <Header carItems={carItems}/>
        <Routes productosItems={productosItems} carItems={carItems} 
        handleAddProducto={handleAddProducto}
        handleEliminaProducto={handleEliminaProducto}
        handleCartClearence={handleCartClearence}/>
      </Router>


    </div>
  )
}

export default App