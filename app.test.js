/* const {
  numeroDeFibonacci
} = require('./app.js') */
const {
  numeroDeFibonacci
} = require('./app-solutions.js')

describe('Matematicas', () => {
  describe('Función de Fibbonachi', () => {
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
    test('La función nos devuelve false si el número pasado como parámetro no pertenece a la sucesión de Fibinacci', () => {
      expect(numeroDeFibonacci(7)).toBeFalsy()
      expect(numeroDeFibonacci(11)).toBeFalsy()
      expect(numeroDeFibonacci(45)).toBeFalsy()
      expect(numeroDeFibonacci(96)).toBeFalsy()
    })
  })
})
