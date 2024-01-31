/* const {
  numeroDeFibonacci
} = require('./app.js') */
const {
  numeroDeFibonacci,
  esNumeroFeliz
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
