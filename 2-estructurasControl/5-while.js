const harold = {
  nombre: 'Harold',
  apellido: 'Peñaloza',
  edad: 28,
  peso: 60,
}

console.log(`Al inicio del año ${harold.nombre} pesaba ${harold.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;


const META = harold.peso - 3;
let dias = 0;

while (harold.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(harold);
  } else if (realizaDeporte()){
    adelgazar(harold);
  }
  dias++;
}

console.log(`Pasaron ${dias} dias para que ${harold.nombre} pesara ${Math.floor(harold.peso)}kg`)// or with tofixed()