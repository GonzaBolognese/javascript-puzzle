/* const {
  numeroDeFibonacci
} = require('./app.js') */
const { describe } = require('node:test')
const {
  numeroDeArmstrong,
  numeroDeFibonacci,
  esNumeroFeliz,
  strCount,
  toCamelCase

} = require('./app-solutions.js')

describe('Matematicas', () => {
  describe('Numero de Armstrong 🪞', () => {
    test('La función nos devuelve true si la suma de los dígitos, cada uno elevado a la potencia del número total de dígitos, es igual al propio número.', () => {
      expect(numeroDeArmstrong(8)).toBeTruthy()
      expect(numeroDeArmstrong(153)).toBeTruthy()
      expect(numeroDeArmstrong(8208)).toBeTruthy()
    })
    test('La función nos devuelve false si la suma de los dígitos, cada uno elevado a la potencia del número total de dígitos, NO es igual al propio número', () => {
      expect(numeroDeArmstrong(13)).toBeFalsy()
      expect(numeroDeArmstrong(145)).toBeFalsy()
      expect(numeroDeArmstrong(8207)).toBeFalsy()
    })
  })

  describe('Función de Fibbonachi 🐚', () => {
    test('Los numeros 0 y 1 devuelven true', () => {
      expect(numeroDeFibonacci(0)).toBeTruthy()
      expect(numeroDeFibonacci(1)).toBeTruthy()
    })
    test('La función nos devuelve true si el número pasado como parámetro pertenece a la sucesión de Fibonacci.', () => {
      expect(numeroDeFibonacci(5)).toBeTruthy()
      expect(numeroDeFibonacci(21)).toBeTruthy()
      expect(numeroDeFibonacci(89)).toBeTruthy()
      expect(numeroDeFibonacci(144)).toBeTruthy()
    })
    test('La función nos devuelve false si el número pasado como parámetro NO pertenece a la sucesión de Fibinacci', () => {
      expect(numeroDeFibonacci(7)).toBeFalsy()
      expect(numeroDeFibonacci(11)).toBeFalsy()
      expect(numeroDeFibonacci(45)).toBeFalsy()
      expect(numeroDeFibonacci(96)).toBeFalsy()
    })
  })

  describe('Función Numero Feliz 😊', () => {
    test('La funcion debe devolver "Es feliz" si cumple con las condiciones de un numero feliz', () => {
      expect(esNumeroFeliz(19)).toBe('Es feliz')
      expect(esNumeroFeliz(100)).toBe('Es feliz')
      expect(esNumeroFeliz(68)).toBe('Es feliz')
    })

    test('Los numeros infelices devuelven "No es feliz"', () => {
      expect(esNumeroFeliz(4)).toBe('No es feliz')
      expect(esNumeroFeliz(21)).toBe('No es feliz')
      expect(esNumeroFeliz(33)).toBe('No es feliz')
    })

    test('Los numeros negativos devuelven "No es feliz"', () => {
      expect(esNumeroFeliz(-523)).toBe('No es feliz')
      expect(esNumeroFeliz(-3)).toBe('No es feliz')
      expect(esNumeroFeliz(-7)).toBe('No es feliz')
      expect(esNumeroFeliz(-19)).toBe('No es feliz')
    })
  })
})

describe('String', () => {
  describe('strCount', () => {
    test('Si no se proporciona se encuentra coincidencia debe devolver 0', () => {
      expect(strCount('hello', 'm')).toBe(0)
      expect(strCount('', 'j')).toBe(0)
    })
    test('Si se encuentran coincidencias debe devolver la cantidad de coincidencias encontradas', () => {
      expect(strCount('alfombra', 'a')).toBe(2)
      expect(strCount('murcielago', 'r')).toBe(1)
      expect(strCount('hamburgesas', 's')).toBe(2)
    })
    test('Detecta los espacios como un caracter valido', () => {
      expect(strCount('Nueva York', ' ')).toBe(1)
      expect(strCount('Ciudad de Buenos Aires', ' ')).toBe(3)
    })
    test('Los espacios iniciales y finales no los detecta como caracter valido', () => {
      expect(strCount(' Nueva York ', ' ')).toBe(1)
      expect(strCount('Ciudad de Buenos Aires   ', ' ')).toBe(3)
    })
  })

  describe('toCamelCase', () => {
    test('Si se proporciona un string vacio devuelve el string vacio', () => {
      expect(toCamelCase('')).toBe('')
    })
    test('Si se pasa el string "full_stack_developer" devuelve "fullStackDeveloper"', () => {
      expect(toCamelCase('full_stack_developer')).toBe('fullStackDeveloper')
    })
    test('Si se pasa el string "Full-Stack-Developer" devuelve "FullStackDeveloper"', () => {
      expect(toCamelCase('Full-Stack-Developer')).toBe('FullStackDeveloper')
    })
    test('Si se pasa el string "F-S-D" devuelve "FSD"', () => {
      expect(toCamelCase('F-S-D')).toBe('FSD')
    })
  })
})
