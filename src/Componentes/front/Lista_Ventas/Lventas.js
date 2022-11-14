import React, { useState } from 'react';
import { listado_ventas } from "../../back/data/datos_ventas";
import Vista_ventas from './vista_ventas';

const Lventas = () => {
  const [vendidos, setVendidos] = useState(listado_ventas);
  
    console.log("Funcione mugre")
  let total = [];
  vendidos.map(vendio => (
    total.push(vendio.Valor)
    ));
  //console.log(total);
  total = total.reduce((pre, actual) => pre + actual, 0);

  return (
    <div>
      <div class="centrar-texto">
        <h2>Total $ {total}</h2>
      </div>      
      <Vista_ventas vendio = { vendidos }/>
    </div>
  );
}

export default Lventas;