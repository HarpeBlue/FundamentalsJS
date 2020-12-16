var harold = {
  nombre: 'Harold',
  apellido: 'Peñaloza',
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero){

    console.log('Ingeniero')

  }
  if (persona.cocinero){

    console.log('Cocinero')

  }
  if (persona.cantante){

    console.log('Cantante')

  }
  if (persona.dj){

    console.log('DJ')

  }
  if (persona.guitarrista){

    console.log('Guitarrista')

  }
  if (persona.drone){

    console.log('Piloto de drone')

  }
}

imprimirProfesiones(harold);