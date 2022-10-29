import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Layout from './Componentes/Layout';
import Home from './Componentes/Home';
import About from "./Componentes/About";
import Contact from './Componentes/Contact';
import Lproductos from './Componentes/Productos/Lproductos';
import LproductosAdmin from './Componentes/Productos/LproductosAdmin';
import Mventas from './Componentes/Mventas';
import Lventas from './Componentes/Lista_Ventas/Lventas';
import Carrito from './Componentes/Carrito';
import Productos from './Componentes/Productos';
import Mproducto from './Componentes/Mproducto';
import IngresarProductosAdmin from './Componentes/Productos/IngresarProductosAdmin';
import CancelarIngresoProducto from './Componentes/Productos/LproductosAdmin'

function App() {
  return (
    <Router>
      <Layout>
      <div>
        <Switch>
	  <Route path="/IngresarProductosAdmin" >
            <IngresarProductosAdmin />
          </Route>
          <Route path="/LproductosAdmin" >
            <CancelarIngresoProducto />
          </Route>

          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contacto" >
            <Contact />
          </Route>
          <Route path="/Productos" >
            <Productos />
          </Route>
          <Route path="/lProductos" >
            <Lproductos />
          <Route path="/lProductosAdmin" >
            <LproductosAdmin />
          </Route>
          </Route>
          <Route path="/MProductos" >
            <Mproducto/>
          </Route>
          <Route path="/mVentas" >
            <Mventas />
          </Route>
          <Route path="/lVentas" >
            <Lventas />
          </Route>
          <Route path="/Carrito" >
            <Carrito/>
          </Route>
          <Route path="/" exact >
            <Home />
          </Route>
        </Switch>
      </div>
      </Layout>
    </Router>


  );
};

export default App