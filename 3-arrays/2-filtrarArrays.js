// Siempre se necesitan un array y una condición. Filter nos devuelve un Array

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
  altura: 1.76,
}


const esAlta = ({ altura }) => altura >= 1.8;
const esBaja = ({ altura }) => altura < 1.8;

const personas = [harold, alan, martin, dario, vicky, paula];

const personasAltas = personas.filter(esAlta);

const personasBajas = personas.filter(esBaja);

console.log(personasAltas);