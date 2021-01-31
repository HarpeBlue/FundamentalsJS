function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}

const harold = new Persona('Harold', 'Peñaloza');

harold.saludar();