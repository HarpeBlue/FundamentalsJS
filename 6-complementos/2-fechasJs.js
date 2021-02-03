function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2);

  return Math.floor(diferencia / unDia);
}

const hoy = new Date();
const nacimiento = new Date('1996', 10, 15);

const diferencia = diasEntreFechas(hoy, nacimiento);

console.log(diferencia);

// Podemos hacer operaciones con fechas.