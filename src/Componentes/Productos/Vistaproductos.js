
import React, {useState}from  "react"

const Vistaproductos =(producto)=>{

  return ( 
  <div> 

    <p>{producto.id}</p>
    <p>{producto.nombre}</p>
    <p>{producto.cantidad}</p>
    <p>{producto.precio}</p>
    <p>{producto.unidad}</p>
    <p>{producto.imagen}</p>

 
  </div>

  )

  
}

export default Vistaproductos