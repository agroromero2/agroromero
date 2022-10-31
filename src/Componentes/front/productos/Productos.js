import React from 'react';


const Productos = ({ productosItems, handleAddProducto }) => {
    return (

        <div className='Fproductos'>
            {productosItems.map((productosItem) => (
                <div   className="card">
                    <div>
                        <img
                            className='productosImagen'
                            src={productosItem.Imagen}
                            alt={productosItem.Imagen}
                             />
                    </div>
                    <div>
                        <h3 className='productos-nombre' > {productosItem.Nombre}</h3>
                        <div className="productos-descripcion">
                            {productosItem.Descripcion}
                        </div>
                        <div className="productos-precio">
                            ${productosItem.Precio}.oo
                        </div>
                        <div>
                            <button className='productos-add-car'
                                onClick={() => handleAddProducto(productosItem)}
                            >Adicionar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productos