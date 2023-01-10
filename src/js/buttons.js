const botonLogin = document.querySelector("#botonLogin");
const botonBusqueda = document.querySelector("#botonBusqueda");
const inputBusqueda = document.querySelector("#inputBusqueda");

botonLogin.addEventListener("click", f);

function f() {
    console.log("botonLogin clicked.");
}

botonBusqueda.addEventListener("click", (e) => {
    inputBusqueda.classList.toggle("header__input2");
})