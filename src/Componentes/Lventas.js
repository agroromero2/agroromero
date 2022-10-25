import '../index.css';
import React, {useState} from 'react';
import {listado_ventas} from "./datos_ventas";
import Vista_ventas from './vista_ventas';

function Lventas() {
  const [vendidos, setVendidos] = useState(listado_ventas);
  console.log(vendidos)

  let total = [];
  vendidos.map(vendio => (
    total.push(vendio.Valor)
    ));
  console.log(total);
  total = total.reduce((pre, actual) => pre + actual, 0);

  return (

    <div>


<div className="text-right mx-4 my-4">
  <h2 className="btn btn-primary  ">Total $ {total}</h2>
  </div>





<div class="panel-group">
  <div class="panel panel-primary">
    <div class="panel-heading">
    
    </div>
  </div>
</div>

          <table className='table'>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>idVenta</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
                <td>
                {vendidos.map((vendio) => {
                  return(
                    <Vista_ventas 
                    key={vendio.id}
                    fecha={vendio.fecha}
                  />
                  );  
                })}
                </td>
                <td>
                {vendidos.map((vendio) => {
                  return(
                    <Vista_ventas 
                    key={vendio.id}
                    idVenta={vendio.idVenta}
                  />
                  );  
                })}
                </td>
                <td>
                {vendidos.map((vendio) => {
                  return(
                    <Vista_ventas 
                    key={vendio.id}
                    Valor={vendio.Valor}
                    unidad={vendio.unidad}
                  />                    
                  );  
                })}
                </td>
      </tbody>
          </table>
      
    </div>




  );
}

export default Lventas;