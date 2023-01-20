const todosLosProductos = () => {
    return fetch("http://localhost:3000/productos").then((respuesta) => {
        return respuesta.json();
    }  
)};

const crearProducto = (nombre, precio, categoria, imagen, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({nombre, precio, categoria, imagen, descripcion})
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}
    
export const clientServices = {
    todosLosProductos,
    crearProducto,
    eliminarProducto
};