// Un callback es una función que se va ejecutar en algún futuro y no sabemos cuando se va a ejecutar.

const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (character) {
  console.log(`Hola yo soy, ${character.result.properties.name}`);
}

$.get(lukeUrl, opts, onPeopleResponse);