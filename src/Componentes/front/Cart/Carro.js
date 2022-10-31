import React from 'react'
import './carro.css'

const Carro = ({ carItems, handleAddProducto, handleEliminaProducto, handleCartClearence}) => {

  const TotalPrecio = carItems.reduce((Precio, item) => Precio + item.quantity * item.Precio, 0)
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Carro </div>
      <div className="clear-cart">
        {carItems.length >=1 && (
          <button className='clear-cart-button' onClick={handleCartClearence}>Limpia Carro</button>
        )}
      </div>

      {carItems.length === 0 && (
      <div className='cart-item-empty'> No se han adicionado Items.</div>
      )}

      <div>
        {carItems.map((item) => (
       <div key={item.id} className='cart-item-list'>
       <img className='cart-item-image' src={item.Imagen} alt={item.Nombre} 
       />          
       <div className='cart-items-nombre'>
        {item.Nombre}
        </div>
        <div className="cart-item-funcion">
          <button className='cart-item-add' onClick={() => handleAddProducto(item)}> +</button>
          <button className='cart-item-elim' onClick={() => handleEliminaProducto(item)}>-</button>
          </div>    
          <div className="cart-item-precio">
            {item.quantity} * ${item.Precio}
          </div>
     </div>


                    
        ))}
        

      </div>
            <div className='cart-item-total'>
              Valor Total
              <div className='cart-item-total-precios'>
                ${TotalPrecio}
              
              </div> 
            </div>
    </div>
  );
};

export default Carro