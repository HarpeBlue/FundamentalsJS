function heredaDe(prototipoHijo, prototipoPadre) {
  const fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador Frontend`)
}


const harold = new Persona('Harold', 'Peñaloza', 1.72);
const sacha = new Persona('Sacha', 'Lifszyc', 1.65);
const erika = new Desarrollador('Erika', 'Luna', 1.89);

console.log(harold.soyAlto())
console.log(sacha.soyAlto())
console.log(erika.soyAlto())

// La herencia de clases no existe, hay prototipos y es complejo usarlos jaja
