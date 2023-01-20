import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.crearProducto(nombre, precio, descripcion, categoria, imagen)
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })
})