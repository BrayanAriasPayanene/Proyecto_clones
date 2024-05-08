const btnLogout = document.getElementById("btn-logout")
const  num1Input = document.getElementById ("num1-input"); /*se declara variable, y se llama desde el html*/
const  num2Input = document.getElementById ("num2-input"); /*se declara variable, y se llama desde el html*/
const  buttonResta = document.getElementById ("btn-resta"); /*se declara variable, y se llama desde el html*/
const  result = document.getElementById ("result"); /*se declara variable, y se llama desde el html*/



btnLogout.addEventListener("click", function (){
    localStorage.removeItem("loggedUser");
    window.location.href="./index.html";
});

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log (loggedUser.balance);


/*1*/
let inputValue1 = "";

num1Input.addEventListener("change", function () {
        inputValue1 = parseInt(num1Input.value)
});




/*3*/
buttonResta.addEventListener("click", function () {
    /*console.log ("El resultado es", inputValue1 +inputValue2 ); */
    let nuevoSaldo = Number(loggedUser.balance) - inputValue1;
    saldo=nuevoSaldo;

    result.innerHTML= `<div>${nuevoSaldo}</div>`;
});
/*3*/ 
