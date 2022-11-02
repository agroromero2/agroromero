import React from 'react'

const VistaproductosAdmin = (producto) => {
    console.log(producto)
    return (
        
        <div>
            <table class='table mx-auto mx-2 paddin'>
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Unidad</th>
                    </tr>
                </thead>
                <tbody>
                    {producto.productos.map(product => (
                        <tr key = {product.id}>
                            <td>{product.nombre}</td>
                            <td>{product.cantidad}</td>
                            <td>$ {product.precio}</td>
                            <td>{product.unidad}</td>
                        </tr>
                    ))}            
                </tbody>
            </table>
        </div>
                    );
}

export default VistaproductosAdmin