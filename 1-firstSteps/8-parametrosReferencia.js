var harold = {
  nombre: 'Harold',
  apellido: 'Peñaloza',
  edad: '24'
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: '27'
}

function imprimirNombreEnMayuscula(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(harold);
imprimirNombreEnMayuscula(dario);
imprimirNombreEnMayuscula({ nombre: 'Pepito' });

// Los objetos se pasan por referencia en los parámetros de una función no como las variables normales.
// Para evitar esto podemos retornar un objeto nuevo.
function cumpleanos(persona) {

  return {
    ...persona,
    edad: persona.edad + 1
  }
}