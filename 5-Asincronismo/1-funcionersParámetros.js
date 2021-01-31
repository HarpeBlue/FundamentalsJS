class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre}`);
    if (fn) {
      fn(this.nombre, this.apellido, false);
    }
  }


  soyAlto() {
    return this.altura > 1.8;
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador Frontend`)
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }

}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`);
  }
}


const harold = new Persona('Harold', 'Peñaloza', 1.72);
const sacha = new Persona('Sacha', 'Lifszyc', 1.65);
const erika = new Desarrollador('Erika', 'Luna', 1.89);

harold.saludar()
sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)

// La herencia de clases no existe, hay prototipos y es complejo usarlos jaja
