const header = document.querySelector("#header");
const logoHeader = document.querySelector("#logoHeader");
const botonLogin = document.querySelector("#botonLogin");
const botonBusqueda = document.querySelector("#botonBusqueda");
const inputBusqueda = document.querySelector("#inputBusqueda");

if (botonLogin) {
    botonLogin.addEventListener("click", goToLogin);
}

logoHeader.addEventListener("click", goToIndex);

botonBusqueda.addEventListener("click", (e) => {
    inputBusqueda.classList.toggle("header__input2");
    });

/**
 * Redirects to login.html
 */
    function goToLogin() {
    window.location = './login.html';
}

/**
 * Redirects to index.html
 */
function goToIndex() {
    window.location = './index.html';
}