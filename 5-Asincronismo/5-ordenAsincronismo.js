//Esto es un callback hell, no nos sirve mucho.
const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, callback).fail(function () {
    console.log(`Sucedió un error. No se pudo obrener el personaje ${id}`)
  });

}

obtenerPersonaje(1, function (character) {
  console.log(`Hola, yo soy ${character.result.properties.name}`);
  obtenerPersonaje(2, function (character) {
    console.log(`Hola, yo soy ${character.result.properties.name}`);
    obtenerPersonaje(3, function (character) {
      console.log(`Hola, yo soy ${character.result.properties.name}`);
      obtenerPersonaje(4, function (character) {
        console.log(`Hola, yo soy ${character.result.properties.name}`);
        obtenerPersonaje(5, function (character) {
          console.log(`Hola, yo soy ${character.result.properties.name}`);
          obtenerPersonaje(6, function (character) {
            console.log(`Hola, yo soy ${character.result.properties.name}`);
            obtenerPersonaje(7, function () {
              console.log(`Hola, yo soy ${character.result.properties.name}`);
            });
          });
        });
      });
    });
  });
});