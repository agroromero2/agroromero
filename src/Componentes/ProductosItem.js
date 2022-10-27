const ProductosItem = ({data,addToCard}) => {
  let  {id, nombre, precio, descripcion} = data;
    return (
    
    <div style= {{border:"thin solid gray" , padding:"1rem"}}>
        <h4>{nombre}</h4>
        <h5> Precio $  {precio}.00</h5>
        <br />
        <h5>{descripcion}</h5>
        <br />
        
        <button className="btn btn-primary" onClick={()=>addToCard(id)}>Agregar</button>
    </div>
  )
}

export default ProductosItem