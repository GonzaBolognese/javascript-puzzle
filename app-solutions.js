function numeroDeFibonacci (numero, actual = 1, previo = 0) {
  // Caso base: el número actual en la secuencia es igual al número proporcionado o el el numero proporcionado es 0
  if (actual === numero || previo === numero) {
    return true
  }

  // Caso base: el número actual en la secuencia supera al número proporcionado
  if (actual > numero) {
    return false
  }

  // Llamada recursiva con los siguientes números en la secuencia de Fibonacci
  return numeroDeFibonacci(numero, actual + previo, actual)
}

module.exports = {
  numeroDeFibonacci
}
