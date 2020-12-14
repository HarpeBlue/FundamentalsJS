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

function imprimirNombreEnMayúscula(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayúscula(harold);
imprimirNombreEnMayúscula(dario);
imprimirNombreEnMayúscula({ nombre: 'Pepito' });

