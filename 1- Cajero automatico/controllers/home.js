const infoDiv = document.getElementById("user-info")
const btnLogout = document.getElementById("btn-logout")
const btnConsultarSaldo = document.getElementById("btn-consultar-saldo")
const btnDepositar = document.getElementById("btn-depositar")
const btnRetirar = document.getElementById("btn-retirar")

console.log ("esoy en el home")

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log (loggedUser.email); /*con este console log, puedo ver en consola lo que esà almacenaado en el local storage*/

infoDiv.innerHTML=`<span> Bienvenido ${loggedUser.nombre}, en que podemos colaborarle</span>`

btnLogout.addEventListener("click", function (){
    localStorage.removeItem("loggedUser");
    window.location.href="./index.html";
});

btnConsultarSaldo.addEventListener("click", function (){
    window.location.href="./consultar.html";
});

btnDepositar.addEventListener("click", function (){
    window.location.href="./depositar.html";
});

btnRetirar.addEventListener("click", function (){
    window.location.href="./retirar.html";
});
