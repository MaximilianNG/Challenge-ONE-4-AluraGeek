import { clientServices } from "../service/client-service.js";

var isAdmin = false;
var isMobile = false;
if (window.matchMedia("(max-width: 415px)").matches) {
    // The viewport is less than 768 pixels wide
    isMobile = true;
    console.log("This is a mobile device.");
}

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

const loSentimos = () => {
    const mensaje = document.createElement("p");
    const contenido = `Lo sentimos, no encontramos nada X_X <br>Por favor, intenta nuevamente.`;
    mensaje.innerHTML = contenido;
    mensaje.classList.add("raleway700", "noEncontramos");
    return mensaje;
}


//Si estoy en Ver Todos, poblar la galería:
const galeriaVerTodos = document.querySelector("[data-galeriaVerTodos]");

if (galeriaVerTodos) {
    clientServices.todosLosProductos().then((productos) => {
        productos.forEach(producto => {
        const nuevoProducto = crearNuevaTarjeta(producto.imagen, producto.nombre, producto.precio, producto.id);
        galeriaVerTodos.appendChild(nuevoProducto);
        });
        //Acá borramos los botones de control si isAdmin no es verdadero.
        checkPrivileges();
    }).catch((error) => {
        console.log("Ocurrió un error con todosLosProductos() en galeriaVertodo. Error a continuación: " + error);
    })
}

//Si estoy en Index, poblar las galerías filtrando por categoría:
const galeriaStarWars = document.querySelector("[data-starWars]");
const galeriaConsolas = document.querySelector("[data-consolas]");
const galeriaDiversos = document.querySelector("[data-diversos]");

if (galeriaStarWars) {
    clientServices.todosLosProductos().then((productos) => {
        productos.forEach(producto => {
            const nuevoProducto = crearNuevaTarjeta(producto.imagen, producto.nombre, producto.precio, producto.id);
            if (producto.categoria == "Star Wars") {
                if (isMobile && !(galeriaStarWars.childElementCount >= 4)) {
                    //Si estamos en un mobile device, no agregues más de 4 cards.
                    galeriaStarWars.appendChild(nuevoProducto);
                }
            } else if (producto.categoria == "Consolas") {
                if (isMobile && !(galeriaConsolas.childElementCount >= 4)) {
                    galeriaConsolas.appendChild(nuevoProducto);
                }
            } else {
                if (isMobile && !(galeriaDiversos.childElementCount >= 4)) {
                    galeriaDiversos.appendChild(nuevoProducto);
                }
            }
        });
        //Acá sacamos los botones sin controlar los privilegios, porque es el index y no queremos botones ahí.
        buttonsOff();
    }).catch((error) => {
        console.log("Ocurrió un error con todosLosProductos() en las galerias del index. Error a continuación: " + error);
    })
}

//Si estoy en búsqueda, poblar con resultados de la búsqueda:
const galeriaBusqueda = document.querySelector("[data-galeriaBusqueda]");
if (galeriaBusqueda) {
    var huboResultado = false;
    clientServices.todosLosProductos().then((productos) => {
        productos.forEach((producto) => {
            if (producto.nombre.toLowerCase().includes(localStorage.busqueda)) {
                const encontrado = crearNuevaTarjeta(producto.imagen, producto.nombre, producto.precio, producto.id);
                galeriaBusqueda.appendChild(encontrado);
                huboResultado = true;
            }
        });
        if (!huboResultado) {
            galeriaBusqueda.appendChild(loSentimos());
        }
    })
    .catch((error) => {
        console.log("Ocurrió un error con todosLosProductos() en galería de búsqueda. Error a continuación: " + error);
    });  
}


function checkPrivileges() {
    if (isAdmin) {
    
    } else {
        const adminButtons = document.querySelectorAll(".btnContainer");
        adminButtons.forEach(botones => {
            botones.style.display = "none";
        })
    }
}

function buttonsOff() {
    const adminButtons = document.querySelectorAll(".btnContainer");
    adminButtons.forEach(botones => {
        botones.style.display = "none";
    })
}