const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("pass-input");
const btLogin = document.getElementById("btn-login");

const users = [
  {
    email: "brayan@gmail.com",
    password: "Colombia2023+",
    balance: 150,
    nombre: "Brayan",
  },
  {
    email: "monkeydluffy@gmail.com",
    password: "Agosto6gear5",
    balance: 500,
    nombre: "Luffy",

  },
  {
    email: "paola@gmail.com",
    password: "Joyboy800year",
    balance: 700,
    nombre: "Paola",
  },
];

btLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;
  /*console.log(email); - con esta linea sabemos si funciona el evento aplicado en botton*/

  let loggedUser = users.find(
    (user) => user.email === email && user.password === password
  );
  /*con la linea anterior, le estamos indicando, que busque en el arreglo, para ver si encuentra algo relacionado con los datos proporcionados en el login */

  if (loggedUser) {
    /*localStorage.setItem("loggedUser",loggedUser); permite guardar el logged usuario en el local storage */
    localStorage.setItem("loggedUser",JSON.stringify(loggedUser));
    window.location.href = "./home.html";
    /*si hay loggedUser yo te cambio a la siguiente pestaña */
  } else {
    alert("El usuario y la contraseña son incorrectos");
    /*si no hay loggedUser yo te envio la siguiente alerta */
  }
});
