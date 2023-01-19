const crearNuevaTarjeta = (urlImagen, nombre, precio) => {
    const tarjeta = document.createElement("div");
    const contenido = `<img src="${urlImagen}" alt="" class="card__imagen">
    <p class="raleway500 card__nombre">${nombre}</p>
    <p class="raleway700 card__precio">$${precio}</p>
    <a href="" class="raleway700 card__verProducto">Ver Producto</a>`
    
    tarjeta.innerHTML = contenido;
    tarjeta.classList.add("card");
    return tarjeta;
}

const galeria = document.querySelector("[data-galeriaVerTodos]");

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/productos");
http.send();
http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(producto => {
        const nuevoProducto = crearNuevaTarjeta(producto.imagen, producto.nombre, producto.precio);
        galeria.appendChild(nuevoProducto);
    });
}