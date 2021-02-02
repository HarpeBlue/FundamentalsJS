//Esto es un callback hell, no nos sirve mucho.
const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

const ids = [1, 2, 3, 4, 5, 6, 7];

const promesas = ids.map((id) => obtenerPersonaje(id))

Promise
  .all(promesas)
  .then((personajes) => {
    console.log(personajes)
  })
  .catch(onError);

// Las promesas podemos encadenarlas en paralelo por encima de los callbacks

// obtenerPersonaje(1)
//   .then((character) => {
//     console.log(`El personaje 1 es ${character.result.properties.name}`)
//     return obtenerPersonaje(2);
//   })
//   .then((character) => {
//     console.log(`El personaje 2 es ${character.result.properties.name}`)
//   })
//   .catch(onError)

// para retornar otra promesa usamos el key word return.