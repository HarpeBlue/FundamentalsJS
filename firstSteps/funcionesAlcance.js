var nombre = 'Harold';

function imprimirNombreEnMayúscula(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayúscula(nombre);

// Podemos tener una variable con el mismo nombre a nivel local y global sin producir sideSffects
// Si queremos acceder a ella tendríamos que usar al objeto window.global