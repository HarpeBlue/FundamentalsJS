var nombre = 'Harold', apellido = 'Peñaloza';

// Para convertir a mayúscula

var nombreEnMayuscula = nombre.toUpperCase();

console.log(nombreEnMayuscula);

// Para convertir en minúscula

var apellidoEnMinuscula = apellido.toLowerCase();

console.log(apellidoEnMinuscula);

// Buscar caracteres en un string, si lleva parámetro.

var primeraLetraDelNombre = nombre.charAt(0);

console.log(primeraLetraDelNombre);

// Para saber cuántos caracteres tiene.

var cantidadDeLetrasDelNombre = nombre.length;

console.log(cantidadDeLetrasDelNombre);


// Concatenar strings, dentro de las llaves podemos escribir códifo JS-

var nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

var str = nombre.substr(1,2);

console.log(str);

var mostrarUltimaLetra = (name) => {

  var op = name.length - 1;

  var ultimaLetra = name.charAt(op);

  console.log(ultimaLetra);
}

mostrarUltimaLetra(nombre);

