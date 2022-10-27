import { Types } from "../Acciones/AccionesProduct";

export const product_inicial = {
    productos: [
        { id: 1, nombre: "Nombre Articulo 1", precio: 100, descripcion: "Esta es la descripcion del producto"  },
        { id: 2, nombre: "Nombre Articulo 2", precio: 200, descripcion: "Esta es la descripcion del producto" },
        { id: 3, nombre: "Nombre Articulo 3", precio: 300, descripcion: "Esta es la descripcion del producto" },
        { id: 4, nombre: "Nombre Articulo 4", precio: 400, descripcion: "Esta es la descripcion del producto" },
        { id: 5, nombre: "Nombre Articulo 5", precio: 500, descripcion: "Esta es la descripcion del producto" },
        { id: 6, nombre: "Nombre Articulo 6", precio: 600, descripcion: "Esta es la descripcion del producto" },
        { id: 7, nombre: "Nombre Ariculo7", precio: 700, descripcion: "Esta es la descripcion del producto" },
        { id: 8, nombre: "Nombre Ariculo8", precio: 800, descripcion: "Esta es la descripcion del producto" },
        { id: 9, nombre: "Nombre Ariculo9", precio: 900, descripcion: "Esta es la descripcion del producto" }

    ],
    cart: [],
}

export function productosReducer(state, action) {
    switch (action.type) {
        case Types.Add_Article: {
            let newItem = state.productos.find(
                (producto) => producto.id === action.payload
                );
            console.log(newItem);
            
        }
        case Types.Clean_Article: {
            
        }
        case Types.Del_An_Article: {
            
        }
        case Types.Remove_Articles: {
            
        }
        default:

    }

}