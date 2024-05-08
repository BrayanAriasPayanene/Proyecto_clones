import { cartoons, busquedaEspecie, busquedaNombre } from "./controllers/controllers.js";

let root = document.getElementById("root");
let barraEspecie = document.getElementById("busquedaEspecie");
let barraNombre = document.getElementById("busquedaNombre");
let botonDeBusqueda = document.getElementById("buscar");
let botonDeNombre = document.getElementById("buscarN");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = "";
let nextUrl = "";

async function mostrarCartoons(url = "https://rickandmortyapi.com/api/character/") {
  let objetoCartoon = await cartoons(url);
  previousUrl = objetoCartoon.previous;
  nextUrl = objetoCartoon.next;
  let html = "";
  objetoCartoon.arrayDeCartoons.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span class="letra">${cadaCartoon.nombre}</span>
      <span class="letra">${cadaCartoon.id}</span>
      <span class="letra">${cadaCartoon.especie}</span>
      <img class="img" src="${cadaCartoon.imagen}"/>
      <sapn class="letra">${cadaCartoon.estado}</span>
    </div>`;
    html += cardCartoon;
  });
  root.innerHTML = html;
}

botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault();
  let especieBuscada = await busquedaEspecie(barraEspecie.value);
  let html = "";
  especieBuscada.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span class="letra">${cadaCartoon.nombre}</span>
      <span class="letra">${cadaCartoon.id}</span>
      <img class="img" src="${cadaCartoon.imagen}"/>
      <sapn class="letra">${cadaCartoon.estado}</span>
    </div>`;
    html += cardCartoon;
  });
  root.innerHTML = html;
});

botonDeNombre.addEventListener("click", async function (event) {
  event.preventDefault();
  let nombreBuscado = await busquedaNombre(barraNombre.value);
  let html = "";
  nombreBuscado.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span class="letra">${cadaCartoon.nombre}</span>
      <span class="letra">${cadaCartoon.id}</span>
      <span class="letra">${cadaCartoon.estado}</span>
      <img class="img" src="${cadaCartoon.imagen}"/>
    </div>`;
    html += cardCartoon;
  });
  root.innerHTML = html;
});

previousBtn.addEventListener("click", async () => {
  mostrarCartoons(previousUrl);
});

nextBtn.addEventListener("click", async () => {
  mostrarCartoons(nextUrl);
});

mostrarCartoons();
