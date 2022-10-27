import { useReducer } from "react"
import { Types } from "../Acciones/AccionesProduct";
import { productosReducer, product_inicial } from "../Reducers/productosReducer"
import ProductosItem from "./ProductosItem";
//import CartItem from "./CartItem";

const Productos = () => {

  const [state, dispatch] = useReducer(
    productosReducer, product_inicial);

  const {productos,cart} = state;

  const addToCard = (id) => {
    console.log(id)
   
   }
   
  const delFromCard = () => { }

  const CleanCard = () => { }

  return (
    <div>
      <div className="text-6xl text-success text-center my-4"><h1>Productos</h1></div>
      <article className="box grid-responsive">
        {productos.map((producto) => (
        <ProductosItem key={producto.id} data={producto}addToCard={addToCard}/>
        ))}


      </article >
      <h3 className="text-6xl text-success text-center my-4">Carrito</h3>
      <article className="box">
      <button  className ="btn btn-primary">Limpiar Carrito </button>
      
      </article>
    </div>

  )
}

export default Productos