import { clientServices } from "../service/client-service.js"

const crearNuevaTarjeta = (urlImagen, nombre, precio, id) => {
    const tarjeta = document.createElement("div");
    const contenido = `<img src="${urlImagen}" alt="" class="card__imagen">                        
    <div class="btnContainer">
        <button class="btnDelete" data-delete><i class="fa-solid fa-trash"></i></button>
        <button class="btnEdit" data-edit><i class="fa-solid fa-pen"></i></button>
    </div>
    <p class="raleway500 card__nombre">${nombre}</p>
    <p class="raleway700 card__precio">$${precio}</p>
    <a href="" class="raleway700 card__verProducto">Ver Producto</a>`
    
    tarjeta.innerHTML = contenido;
    tarjeta.classList.add("card");
    const botonEliminar = tarjeta.querySelector("[data-delete]");
    const botonEditar = tarjeta.querySelector("[data-edit]");
    botonEliminar.addEventListener("click", () => {
        clientServices.eliminarProducto(id);
        console.log("Se eliminó el producto con id: " + id);
    })
    botonEditar.addEventListener("click", () => {
        window.location.href = `./editarProducto.html?id=${id}`
    })
    return tarjeta;
}

const galeria = document.querySelector("[data-galeriaVerTodos]");

clientServices.todosLosProductos().then((productos) => {
    productos.forEach(producto => {
    const nuevoProducto = crearNuevaTarjeta(producto.imagen, producto.nombre, producto.precio, producto.id);
    galeria.appendChild(nuevoProducto);
    });
}).catch((error) => {
    console.log("Ocurrió un error. Error a continuación: " + error);
})