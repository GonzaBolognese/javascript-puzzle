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

const esNumeroFeliz = (num) => {
  const calcularSumaCuadrados = (num) => {
    return num.toString().split('').reduce((sum, digit) => {
      const squaredDigit = parseInt(digit) ** 2
      return sum + squaredDigit
    }, 0)
  }

  if (num <= 0) return 'No es feliz'

  const historial = new Set()

  while (num !== 1 && !historial.has(num)) {
    historial.add(num)
    num = calcularSumaCuadrados(num)
  }

  return num === 1 ? 'Es feliz' : 'No es feliz'
}

module.exports = {
  numeroDeFibonacci,
  esNumeroFeliz
}
