//// VALIDATIONS DE EDITAR PRODUCTO ////
////// URL de la imagen
const inputURL = document.querySelector("#urlImagen");
//inputURL.setCustomValidity("Debe ingresar una url.")
inputURL.addEventListener("input", (evento) => {
    validarURL(evento.target);
})

const inputNombreProducto = document.querySelector("#nombreProducto");
//inputNombreProducto.setCustomValidity("Debe ingresar un nombre.");
inputNombreProducto.addEventListener("input", (evento) => {
    validarNombreProducto(evento.target);
})

const inputCategoria = document.querySelector("#categoria");
//inputCategoria.setCustomValidity("Debe ingresar una categoría.")
inputCategoria.addEventListener("input", (evento) => {
    validarCategoria(evento.target);
})

const inputPrecio = document.querySelector("#precio");
//inputPrecio.setCustomValidity("Debe ingresar un precio.");
inputPrecio.addEventListener("input", (evento) => {
    validarPrecio(evento.target);
})

const inputDescripcion = document.querySelector("#descripcion");
//inputDescripcion.setCustomValidity("Debe ingresar una descripción.");
inputDescripcion.addEventListener("input", (evento) => {
    validarDescripcion(evento.target);
})
///////////////////////////////////////
////FUNCIONES DE CUSTOM VALIDACIONES ////
function validarURL(input) {
    const URL = input.value;
    let mensaje = "";
    
    if (URL == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar una URL de una imagen."
    } else if (!URL.includes("./")) {
        mensaje = "Debe ingresar una URL."
    }
    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
    }

    //input.reportValidity();
    controlarLabels(URL, 0);
}

function validarNombreProducto(input) {
    const nombre = input.value;
    let mensaje = "";

    if (nombre == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un nombre."
    }

    if (nombre.length > 19) {
        mensaje = "Este campo no puede tener más de 20 caracteres."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
    }

    controlarLabels(nombre, 2)
}

function validarCategoria(input) {
    const nombre = input.value;
    let mensaje = "";

    if (nombre == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar una categoría."
    }

    if (nombre.length > 19) {
        mensaje = "Este campo no puede tener más de 20 caracteres."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
    }

    controlarLabels(nombre, 1)
}

function validarDescripcion(input) {
    const descripcion = input.value;
    let mensaje = "";

    if (descripcion == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar una categoría."
    }

    if (descripcion.length > 119) {
        mensaje = "Este campo no puede tener más de 120 caracteres."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
    }

    controlarLabels(descripcion, 4)
}

function validarPrecio(input) {
    const precio = input.value;
    let mensaje = "";

    if (precio == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un precio."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
    }

    controlarLabels(precio, 3)
}
//////////////
/// FUNCIÓN QUE CONTROLA EL BEHAVIOUR DE LAS LABELS ////
const allLabels = document.querySelectorAll(".login__label, .nuevoProducto__label, .editarProducto__label");
function controlarLabels(text, numberOfLabel) {
    //Si hay texto, ponemos noBajar para que las labels no bajen.
    if (!allLabels[numberOfLabel].classList.contains("noBajar") && !text == "") {
        allLabels[numberOfLabel].classList.add("noBajar")
    }

    //Si está vacío, sacamos noBajar para que las labels puedan volver a bajar.
    if (text == "" && allLabels[numberOfLabel].classList.contains("noBajar")) {
        allLabels[numberOfLabel].classList.remove("noBajar")
    }
}