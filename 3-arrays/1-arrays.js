// Estructura de datos para guardar distintos tipos de valores en una colección que podemos iterar.

const harold = {
  nombre: 'Harold',
  apellido: 'Peñaloza',
  altura: 1.72
}

const alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

const martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

const dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

const vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

const paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}




const personas = [harold, alan, martin, dario, vicky, paula];

console.log(personas);

// se puéde acceder a los atributos de un objeto de la siguiente manera

personas[0].nombre;
personas[0]['nombre'];

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}