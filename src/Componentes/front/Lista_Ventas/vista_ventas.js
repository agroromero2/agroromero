import React from 'react'

const Vista_ventas = (ventas) => {

  console.log(ventas.vendio)
  return (
    <div >
      <div class="centrar">
        <table class='content-table'>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>idVenta</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {ventas.vendio.map(v => (
              <tr key={v.id}>
                <td>{v.fecha}</td>
                <td>{v.idVenta}</td>
                <td>$ {v.Valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  )
}

export default Vista_ventas;