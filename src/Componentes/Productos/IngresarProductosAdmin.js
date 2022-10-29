import { Link, Redirect, useHistory } from 'react-router-dom';
import { DProdPrueba } from "./DProdPrueba";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";


function IngresarProductosAdmin() {

    const [lProductos, setProductos] = useState(DProdPrueba);
    const [cuerpo, setCuerpo] = useState([]);
    const redireccionar = useHistory();
    
    console.log(lProductos)
    // Agregar Producto
    const agregarProducto = (producto) => {
        producto.id = uuidv4()
        setProductos([
            ...lProductos,
            producto
        ])
        console.log(lProductos)
        return <Redirect to="/LproductosAdmin" />
    }

    const agregarProducto2 = (e) => {
        e.preventDefault();
        
        console.log(e.target.name, e.target.value)
        const clave = e.target.name
        const valor = e.target.value;
        const newObjeto = {
            [clave]: valor
        };
        setProductos({...lProductos, newObjeto})
        //setProductos({...lProductos, [clave]: valor})
        console.log(lProductos)
        //redireccionar.go(-1)
        //return <Redirect to="/LproductosAdmin" />
    }

    const agregarProducto3 = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const nombre = e.target.name;
        const newObjeto = {
            id: uuidv4(),
            nombre: value,
        };

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
    }

    const onSubmit = () => {
        console.log(lProductos)
    }

    const prueba = (e) => {
        e.preventDefault();
        console.log(lProductos)
        return <Redirect to="/LproductosAdmin" />
    }

    return (
        <div>
            <form className="form-group col-3 justify-content-center mx-auto" onSubmit={agregarProducto3} >
                <div className="row justify-content-center my-4">
                    <label >Nombre del producto</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    name="nombre" 
                    value={lProductos.nombre} 
                    onChange={agregarProducto3}
                    /><div className='my-2'></div>
                    
                    <label>Stock</label>
                    <input 
                    className="form-control" 
                    type="number" 
                    name="cantidad"
                    value={lProductos.cantidad} 
                    onChange={agregarProducto3}
                    /><div className='my-2'></div>

                    <label>Precio</label>
                    <input 
                    className="form-control" 
                    type="number" 
                    name="precio" 
                    value={lProductos.precio} 
                    onChange={agregarProducto3}
                    /><div className='my-2'></div>

                    <label>Unidad de medida</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    name="unidad" 
                    value={lProductos.unidad} 
                    onChange={agregarProducto3}
                    /><div className='my-2'></div> 

                </div>
                <div className='col-8 justify-content-center mx-auto'>
                    <input onClick={agregarProducto3} className="form-control" type="submit" value="Agregar Producto" />
                    <button onClick={agregarProducto2} className='btn btn-primary'>Agregar Producto</button>
                    <Link className="btn btn-danger mx-3 " to="/LproductosAdmin">Cancelar</Link>
                </div>

            </form>
        </div>
    )
}

export default IngresarProductosAdmin
