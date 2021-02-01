// Un callback es una función que se va ejecutar en algún futuro y no sabemos cuando se va a ejecutar.

const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

const onPeopleResponse = function (character) {
  console.log(`Hola, yo soy ${character.result.properties.name}`);
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);
obtenerPersonaje(6);
obtenerPersonaje(7);