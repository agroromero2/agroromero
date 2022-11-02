import React from "react";

const Aproductos = ({ productosItems, AhandleEliminaProducto, AhandleEditProducto}) => {
  return (
    <div className="Fproductos">
      {productosItems.map((productosItem) => (
        <div className="Acard">
          <div>
            <img
              className="productosImagen"
              src={productosItem.Imagen}
              alt={productosItem.Imagen}
            />
          </div>
          <div>
            <h3 className="productos-nombre"> {productosItem.Nombre}</h3>
            <div className="productos-descripcion">
              {productosItem.Descripcion}
            </div>

            
            <div className="productos-cantidad">Cantidad: {productosItem.Cantidad}
            </div>
            
            <div className="Aproductos-precio">${productosItem.Precio}.oo</div>
            <div>

              
              <button className="productos-add-car"
              onClick={() => AhandleEditProducto(productosItem)}
              >Editar</button>

              <button className="productos-del-car"
              onClick={() => AhandleEliminaProducto(productosItem)}
              >Eliminar</button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aproductos;
