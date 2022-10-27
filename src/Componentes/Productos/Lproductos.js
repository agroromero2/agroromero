import React, {useState} from "react";
import { Dproductos } from "./Dproductos";
import Vistaproductos from "./Vistaproductos";
import { edicionProductos } from "./Dproductos";


function Lproductos() {
    const[lProductos, setproductos, deleteTask] =useState(Dproductos);
    console.log(lProductos)

    let total = [];
    lProductos.map(producto => (
      total.push(producto.Valor)
      ));
    console.log(total);
    total = total.reduce((pre, actual) => pre + actual, 0);

    return (
  
<div>

  <h1>Listado de Productos</h1>
  
  <table class='table'>
  
    <thead>
        
      <tr>
        <th>nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Unidad</th>
    
      </tr>
    </thead>

    <tbody>
  
    <td>
       
        {lProductos.map(producto =>{
         return(<Vistaproductos
            key ={producto.id}
            nombre ={producto.nombre}/>
        );
        })}
 
    </td>
    <td>

    {lProductos.map(producto =>{
         return(<Vistaproductos
            key ={producto.id}
            nombre ={producto.cantidad}/>
        );
        })}
    </td>
    <td>
    {lProductos.map(producto =>{
         return(<Vistaproductos
            key ={producto.id}
            nombre ={producto.precio}/>
        );
        })}

      </td>
      <td>
      {lProductos.map(producto =>{
         return(<Vistaproductos
            key ={producto.id}
            nombre ={producto.unidad}/>
        );
        })}
      </td>

    </tbody>
  </table>
  </div>
  
  
    );
  }
  
  export default Lproductos