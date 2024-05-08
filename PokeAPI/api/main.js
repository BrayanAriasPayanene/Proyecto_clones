import {
  buscarPokemon,
  buscarPokemonPorNombre,
} from "./controllers/controllers.js";

let root = document.getElementById("root");
let botonDeBusqueda = document.getElementById("buscar-pokemon");
let barraDeBusqueda = document.getElementById("barra-pokemon");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = ""; //Variables para url
let nextUrl = ""; //Variables para url

/* COMPONENTE DE CARGA */
root.innerHTML = `CARGANDO`;

/*DECLARACION FUNCION PARA LLAMAR A LA API Y MOSTRAR EN PANTALLA LAS CARDS */
async function mostrarPokemones(url) {
  /* COMPONENTE DE CARGA */
  root.innerHTML = `CARGANDO`;
  
  let objetoPokemon = await buscarPokemon(url);

  previousUrl = objetoPokemon.previous;
  nextUrl = objetoPokemon.next;

  let html = "";
  objetoPokemon.arrayDePokemones.forEach((pokemon) => {
    let cardPokemon = `<div class='card'>
                            <span>${pokemon.id}</span>                        
                            <span>${pokemon.nombre}</span>                                                        
                            <span>${pokemon.tipos[0].type.name}</span>
                            <img class='card-image' src='${pokemon.imagen}'/>
                        </div>`;

    html += cardPokemon;
  });
  root.innerHTML = html;
}

//Add event listener que va a ver que escribo en el input y ejecuta el buscar x nombre
botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault(); // evito que se refresque la pagina luego del click
  let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value);
  let cardPokemon = `<div class='card'>
                          <span>${pokemonBuscado.nombre}</span>
                          <span>${pokemonBuscado.id}</span>
                          <span>${pokemonBuscado.tipos[0].type.name}</span>
                          <img class='card-image' src='${pokemonBuscado.imagen}'/>
                    </div>`;

  root.innerHTML = cardPokemon;
});

/* Add event listener que va a ver que botón clickeo y accionará a otra página */
previousBtn.addEventListener("click", async () => {
  mostrarPokemones(previousUrl);
});
nextBtn.addEventListener("click", async () => {
  mostrarPokemones(nextUrl);
});

/* INVOCACION PRIMER LLAMADO A LA API SIN URL (PAGINA 1) */
mostrarPokemones();
