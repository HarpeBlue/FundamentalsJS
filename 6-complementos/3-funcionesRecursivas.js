// Para realizar recursividad necesitamos un caso base  y uno recursivo.

function divisionEntera(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0;
  }
  return 1 + divisionEntera(dividendo - divisor, divisor)
}