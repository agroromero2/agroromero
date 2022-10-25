import '../index.css';
import React from 'react'

const Vista_ventas = (ventas) => {
  return (
    <div >
                <p>{ventas.fecha}</p>
                <p>{ventas.idVenta}</p>
                <p>{ventas.unidad} {ventas.Valor}</p>
              

    </div>
  )
}

export default Vista_ventas;