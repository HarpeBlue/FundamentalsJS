function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

const harold = new Persona('Harold', 'Peñaloza', 1.72);
const sacha = new Persona('Sacha', 'Lifszyc', 1.65);
const erika = new Persona('Erika', 'Luna', 1.89);

console.log(harold.soyAlto())
console.log(sacha.soyAlto())
console.log(erika.soyAlto())
