import React, {useState} from "react";
import { Dproductos } from "./Dproductos";
import VistaproductosAdmin from "./VistaproductosAdmin";
import { Link } from 'react-router-dom';

import IngresarProductosAdmin from "./IngresarProductosAdmin";


function LproductosAdmin() {
  const[lProductos, setProductos] =useState(Dproductos);
  console.log(lProductos)
  return (  
    <div>
      <h1 className="text-center display-1 my-2 fw-bold">Listado de Productos</h1>      
      <div className=" mx-8">
        <Link className="btn btn-primary mx-3 my-2" to="/IngresarProductosAdmin">Insertar nuevo producto</Link>
        <VistaproductosAdmin productos = { lProductos }/>
      </div>      
    </div>
  );
  
}

export default LproductosAdmin