//LLAMADOS A LA API

export async function buscarPokemon(url) {
  let urlParaBuscar = url || `https://pokeapi.co/api/v2/pokemon/`;



  let data = await fetch(urlParaBuscar);
  let dataParseada = await data.json(); // {}.results↓ === [{url,name},{},{}]

  //console.log(dataParseada.next); //
  let arrayDePokemones = [];

  for (let i = 0; i < dataParseada.results.length; i++) {
    const pokemon = dataParseada.results[i];

    // console.log("Pokemon que estamos iterando:", pokemon.url);
    let pokemonData = await fetch(pokemon.url); //https://pokeapi.co/api/v2/pokemon/1/
    let pokemonParseado = await pokemonData.json(); // {}.

    let pokemonFormateado = {
      id: pokemonParseado.id, //"number"
      nombre: pokemonParseado.name, //"string"
      tipos: pokemonParseado.types, // []
      imagen: pokemonParseado.sprites.other.dream_world.front_default, //"string"
    };
    // console.log(pokemonFormateado);
    arrayDePokemones.push(pokemonFormateado);
  }
  return {
    previous: dataParseada.previous,
    next: dataParseada.next,
    arrayDePokemones: arrayDePokemones, //[{id,nombre, tipos, img},{},{}]
  };
}

export async function buscarPokemonPorNombre(nombre) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

  let pokemonParseado = await data.json(); // {}.results↓

  let pokemonFormateado = {
    id: pokemonParseado.id, //"number"
    nombre: pokemonParseado.name, //"string"
    tipos: pokemonParseado.types, // []
    imagen: pokemonParseado.sprites.other.dream_world.front_default, //"string"
  };

  //console.log(pokemonFormateado);
  return pokemonFormateado;
}

export async function paginaAnterior() {}

export async function paginaSiguiente() {}

/* Ejecuciones de prueba*/
//buscarPokemon();
//buscarPokemonPorNombre("charizard");
