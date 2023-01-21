import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagenInput = document.querySelector("[data-imagen]");
    const categoriaInput = document.querySelector("[data-categoria]");
    const nombreInput = document.querySelector("[data-nombre]");
    const precioInput = document.querySelector("[data-precio]");
    const descripcionInput = document.querySelector("[data-descripcion]");

    clientServices.detalleProducto(id).then(({nombre, categoria, imagen, precio, descripcion}) => {
        imagenInput.value = imagen;
        categoriaInput.value = categoria;
        nombreInput.value = nombre;
        precioInput.value = precio;
        descripcionInput.value = descripcion;
    })
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.editarProducto(nombre, categoria, imagen, descripcion, precio, id).then(() => {
        window.location.href = './verTodo.html';
    });
})