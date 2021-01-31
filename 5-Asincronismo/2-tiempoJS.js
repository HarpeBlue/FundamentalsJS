console.log('a')
setTimeout(() => {
  console.log('b')
}, 0);
console.log('c')

// Las tareas que son asincronas se ejecutan después de que el programa principal corra. Por eso no sabemos cuándo vuolverán.