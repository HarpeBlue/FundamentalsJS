var x = 4, y = '4';

x == y; // es true por que los lleva a un mismo tipo de dato y luego evalúa el valor persé.

x === y // false por que verifica el tipo de dato y el valor perse, bien recomendado.

var harold = {
  nombre: 'Harold'
}

var otraPersona = {
  nombre: 'Harold'
}

// si se comparan objetos pregunta por la referencia donde está guardada entonces ahí si da true

var otraPersona = harold; // apunta al mismo lugar de memoria dando true cuando se compara.

// así desgloces un objeto estás creando uno nuevo por lo tanto está apuntando a un nuevo lugar.

var otraPersona = {
  ...harold
}