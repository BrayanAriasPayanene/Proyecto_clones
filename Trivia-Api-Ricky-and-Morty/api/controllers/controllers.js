// Llamado a la Api
export async function cartoons(url) {
  let datos = await fetch(url);
  let datosParseados = await datos.json();
  let arrayDeCartoons = [];
  let previous = datosParseados.info.prev;
  let next = datosParseados.info.next;

  for (let i = 0; i < datosParseados.results.length; i++) {
    const cartoon = datosParseados.results[i];
    let cartoonFormateado = {
      id: cartoon.id,
      nombre: cartoon.name,
      especie: cartoon.species,
      imagen: cartoon.image,
      estado: cartoon.status,
    };
    arrayDeCartoons.push(cartoonFormateado);
  }
  return {
    arrayDeCartoons: arrayDeCartoons,
    previous: previous,
    next: next,
  };
}

export async function busquedaEspecie(barraEspecie) {
  let resultadoEsp = await fetch(`https://rickandmortyapi.com/api/character/?species=${barraEspecie}`);
  let resultadoEspJson = await resultadoEsp.json();
  let arrayDeCartoons = [];
  for (let j = 0; j < resultadoEspJson.results.length; j++) {
    const cartoon = resultadoEspJson.results[j];
    let cartoonFormateado = {
      id: cartoon.id,
      nombre: cartoon.name,
      especie: cartoon.species,
      imagen: cartoon.image,
      estado: cartoon.status,
    };
    arrayDeCartoons.push(cartoonFormateado);
  }
  return arrayDeCartoons;
}

export async function busquedaNombre(barraNombre) {
  let resultadoNob = await fetch(`https://rickandmortyapi.com/api/character/?name=${barraNombre}`);
  let resultadoNobJson = await resultadoNob.json();
  let arrayDeCartoons = [];
  for (let k = 0; k < resultadoNobJson.results.length; k++) {
    const cartoon = resultadoNobJson.results[k];
    let cartoonFormateado = {
      id: cartoon.id,
      nombre: cartoon.name,
      especie: cartoon.species,
      imagen: cartoon.image,
      estado: cartoon.status,
    };
    arrayDeCartoons.push(cartoonFormateado);
  }
  return arrayDeCartoons;
}