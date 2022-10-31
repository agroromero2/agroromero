import React, { useState } from 'react';
import { listado_ventas } from "./datos_ventas";
import Vista_ventas from './vista_ventas';

function Lventas() {
  const [vendidos, setVendidos] = useState(listado_ventas);
  

  let total = [];
  vendidos.map(vendio => (
    total.push(vendio.Valor)
    ));
  //console.log(total);
  total = total.reduce((pre, actual) => pre + actual, 0);

  return (
    <div>
      <div className="text-right mx-4 my-4">
        <h2 className="btn btn-primary  ">Total $ {total}</h2>
      </div>      
      <Vista_ventas vendio = { vendidos }/>
    </div>
  );
}

export default Lventas;