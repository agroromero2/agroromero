import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Layout from './Componentes/Layout';
import Home from './Componentes/Home';
import About from "./Componentes/About";
import Contact from './Componentes/Contact';
import Lproductos from './Componentes/Productos/Lproductos';
import Mventas from './Componentes/Mventas';
import Lventas from './Componentes/Lventas';
import Carrito from './Componentes/Carrito';
import Productos from './Componentes/Productos';
import Mproducto from './Componentes/Mproducto';

function App() {
  return (
    <Router>
      <Layout>
      <div>
        <Switch>

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