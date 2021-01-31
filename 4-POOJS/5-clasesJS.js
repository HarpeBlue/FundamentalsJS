class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }


  soyAlto() {
    return this.altura > 1.8;
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador Frontend`)
  }

}


const harold = new Persona('Harold', 'Peñaloza', 1.72);
const sacha = new Persona('Sacha', 'Lifszyc', 1.65);
const erika = new Desarrollador('Erika', 'Luna', 1.89);

harold.saludar()
sacha.saludar()
erika.saludar()

// La herencia de clases no existe, hay prototipos y es complejo usarlos jaja
