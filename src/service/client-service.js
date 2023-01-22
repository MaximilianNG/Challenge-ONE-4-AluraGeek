const todosLosProductos = () => {
    return fetch("http://localhost:3000/productos").then((respuesta) => {
        return respuesta.json();
    }  
)};

const productosStarWars = () => {
    return fetch("http://localhost:3000/productos?categoria_like=star")
    .then((respuesta) => {
        return respuesta.json();
    })
}

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

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
}

const editarProducto = (nombre, categoria, imagen, descripcion, precio, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, categoria, imagen, descripcion })
    })
    .then (respuesta => console.log(respuesta.json()))
    .catch(err => console.log("Error en editarProducto(): " + err))
}
    
export const clientServices = {
    todosLosProductos,
    productosStarWars,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto
};