const harold = {
  nombre: 'Harold',
  apellido: 'Peñaloza',
  edad: 28,
  peso: 60,
}

console.log(`Al inicio del año ${harold.nombre} pesaba ${harold.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;

const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
  let random = Math.random()
  if (random < 0.25) {
    aumentarDePeso(harold)
  } else if (random < 0.5) {
    adelgazar(harold)
  }
}

console.log(`Al final del año ${harold.nombre} pesa ${Math.floor(harold.peso)}kg`)// or with tofixed()