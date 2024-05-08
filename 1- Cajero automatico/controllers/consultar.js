const btnLogout = document.getElementById("btn-logout")
const infoDiv = document.getElementById("user-info-saldo")
const infoUsuario = document.getElementById("user-info-usuario")


btnLogout.addEventListener("click", function (){
    localStorage.removeItem("loggedUser");
    window.location.href="./index.html";
});

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log (loggedUser.email); /*con este console log, puedo ver en consola lo que esà almacenaado en el local storage*/

infoDiv.innerHTML=`<span>Bienvenido/a         ${loggedUser.nombre} </span>`
infoUsuario.innerHTML=`<span>Su saldo actual es de <u>${loggedUser.balance}</u> pesos</span>`