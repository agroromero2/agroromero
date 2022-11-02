import React from 'react'
import Productos from '../productos/Productos';
import { Route, Switch } from 'react-router-dom';
import Ingreso from '../Ingreso/Ingreso';
import Carro from '../Cart/Carro';
import Aproductos from '../productos/Aproductos';






const Routes = ({ productosItems, carItems, handleAddProducto, handleEliminaProducto,handleCartClearence,AhandleEliminaProducto,AhandleEditProducto}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Productos productosItems={productosItems} handleAddProducto={handleAddProducto} />
        </Route>
        <Route path="/Ingreso" exact>

          <Ingreso />
        </Route>
        <Route path="/Carro" exact>
          <Carro
            carItems={carItems}
            handleAddProducto={handleAddProducto}
            handleEliminaProducto={handleEliminaProducto}
            handleCartClearence={handleCartClearence}    
          />
        </Route>

        <Route path="/AdmonProductos" exact>
        <Aproductos 
        productosItems={productosItems}
        AhandleEditProducto ={AhandleEditProducto}
        AhandleEliminaProducto={AhandleEliminaProducto}
        
        />

        </Route>

        

      </Switch>
    </div>
  )
}

export default Routes