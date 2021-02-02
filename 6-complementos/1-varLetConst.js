var harold = {
  nombre: 'Harold',
  apellido: 'Lifszyc',
  edad: 28
}

function esMayorDeEdad(persona) {
  if (persona.edad > 18) {
    var mensaje = 'Es mayor de edad'
  } else {
    var mensaje = 'Es menor de edad'
  }
  console.log(mensaje)
}

for (var i = 0; i < 10; i++) {
  console.log(i)
}

esMayorDeEdad(harold)

// con let el alcance solo va a ser dentro del bloque, la diferencia con const es que no se puede reasignar. podemos modificar pero no reasignar.
// Nunca uses var