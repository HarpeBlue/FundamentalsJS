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

const MAYORIA_DE_EDAD = 18

//Si lo único que hace es retornar algo entonces podemos sacarle las llaves y el return

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMAyorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  !esMayorDeEdad(persona) ? console.log('Acceso Denegado') : console.log('Acceso permitido')
}

imprimirSiEsMAyorDeEdad(harold);