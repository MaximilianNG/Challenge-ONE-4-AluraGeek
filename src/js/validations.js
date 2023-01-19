const botonEntrar = document.querySelector("#botonEntrar");
const allLabels = document.querySelectorAll(".login__label, .nuevoProducto__label");

const inputNombre = document.querySelector("#nombre");
inputNombre.setCustomValidity("Debe ingresar un nombre.");

const inputMensaje = document.querySelector("#mensaje");
inputMensaje.setCustomValidity("Debe ingresar un mensaje.");

const inputCorreo = document.querySelector("#correo");
if (inputCorreo) {
    inputCorreo.setCustomValidity("Debe ingresar un correo.");
}

const inputContrasenia = document.querySelector("#contrasenia");
if (inputContrasenia) {
    inputContrasenia.setCustomValidity("Debe ingresar una contraseña.");
}



inputNombre.addEventListener("input", (evento) => {
    validarNombre(evento.target);
})

inputMensaje.addEventListener("input", (evento) => {
    validarMensaje(evento.target);
})

if (inputCorreo) {
    inputCorreo.addEventListener("input", (evento) => {
        validarCorreo(evento.target);
    })
}

if (inputContrasenia) {
    inputContrasenia.addEventListener("input", (evento) => {
        validarContrasenia(evento.target);
    })
}

//BOTÓN DE ENTRAR EN EL LOGIN FORM//
if (botonEntrar) {
    botonEntrar.addEventListener("click", (evento) => {
        evento.preventDefault();
        validarLogin()
    });
}

function validarLogin() {
    if (inputCorreo.checkValidity() && inputContrasenia.checkValidity()) {
        window.location = './nuevoProducto.html';
    } else {
        console.log("Campos inválidos.");
    }
}
///////////////

function validarNombre(input) {
    const nombre = input.value;
    let mensaje = "";

    if (nombre == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un nombre."
    }

    if (nombre.length > 39) {
        mensaje = "Este campo no puede tener más de 40 caracteres."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
        }

    input.reportValidity();
}

function validarMensaje(input) {
    const mensajeAMandar = input.value;
    let mensaje = "";

    if (mensajeAMandar == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un mensaje."
    }

    if (mensajeAMandar.length > 119) {
        mensaje = "Este campo no puede tener más de 120 caracteres."
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
        }

    input.reportValidity();
}

function validarCorreo(input) {
    const email = input.value;
    let mensaje = "";

    if (email == "") {
        if (allLabels[0].classList.contains("noBajar")) {
            allLabels[0].classList.toggle("noBajar")
        }
        mensaje = "Este campo no puede quedar vacío."
    } else if (!email.includes("@")) {
        mensaje = "Falta '@'. Debe ingresar un correo con el formato ejemplo@dominio.com";
    }

    if (!allLabels[0].classList.contains("noBajar") && !email == "") {
        allLabels[0].classList.toggle("noBajar")
    }

    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
        }

    input.reportValidity();
}

function validarContrasenia(input) {
    const contrasenia = input.value;
    let mensaje = "";

    if (contrasenia == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar una contraseña."
    }
    if (input.validationMessage !== mensaje) {
        input.setCustomValidity(mensaje);
        }

    input.reportValidity();
}

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