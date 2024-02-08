// MATEMATICOS

// NÚMERO DE ARMSTRONG
const numeroDeArmstrong = (num) => {
  const numString = num.toString()
  const numDigitos = numString.length
  const numArr = numString.split('')
  const numArrPot = numArr.map(n => n ** numDigitos)
  const result = numArrPot.reduce((total, valor) => total + valor, 0)
  return result === num
}

// SECUENCIA DE FIBONACCI
const numeroDeFibonacci = (numero, actual = 1, previo = 0) => {
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

// NÚMEROS FELICES

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

// STRINGS

const strCount = (str, char) => {
  let count = 0
  const trimmedStr = str.trim() // Eliminar espacios iniciales y finales

  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] === char) {
      count++
    }
  }
  return count
}

// CONVERTIR GUIONES/GUIONES BAJOS EN CAMELCASE

const toCamelCase = (str) => {
  return str.split(/[-_]/).map((word, index) => {
    if (index === 0) {
      return word
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  }).join('')
}

module.exports = {
  numeroDeArmstrong,
  numeroDeFibonacci,
  esNumeroFeliz,
  strCount,
  toCamelCase
}
