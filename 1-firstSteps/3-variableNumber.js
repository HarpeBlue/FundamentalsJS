var edad = 24;

edad = edad + 1
edad += 1

var peso = 60

peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 2.15

//var total = precioDeVino * 3 // esto me da muchos decimales pero podemos arreglarlo con este calculo

var total = Math.round(precioDeVino * 100 * 3) / 100

console.log(total)

// para que tenga en cuenta mas decimales después del punto usamos tofixed
// El problema es que se convierte en string
var totalStr = total.toFixed(3);
console.log(totalStr);

// para pasarlo a numero decimal usamos parseFloat

var total2 = parseFloat(totalStr);
console.log(total2)

var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona;

