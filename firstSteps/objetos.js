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

function imprimirNombreEnMayúscula({ nombre }) {
  var nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayúscula(harold);
imprimirNombreEnMayúscula(dario);
imprimirNombreEnMayúscula({ nombre: 'Pepito' });

