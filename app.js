// MATEMATICOS

// NÚMERO DE ARMSTRONG
// Un número de Armstrong es un número en el que la suma de sus dígitos elevados a la potencia del número de dígitos es igual al propio número.
// Por ejemplo, el número 153 es narcisista porque tiene 3 dígitos, y 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.
// Se espera que desarrolles una función que determine si un número dado es un número de Armstrong o no.
// Debe devolver un valor booleano (verdadero o falso) que indique si el número proporcionado es un número de Armstrong.
const numeroDeArmstrong = (num) => {

}

// SECUENCIA DE FIBONACCI
// Se espera que desarrolles una función que determine si un número dado es parte de la secuencia de Fibonacci.
// La secuencia de Fibonacci es una sucesión matemática en la que cada número es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
// La función debe recibir un número como parámetro de entrada.
// Debe devolver un valor booleano (verdadero o falso) que indique si el número proporcionado pertenece a la secuencia de Fibonacci.

const numeroDeFibonacci = (num) => {

}

// NÚMEROS FELICES
// Un número feliz es aquel que, al realizar repetidamente la suma de los cuadrados de sus dígitos, eventualmente alcanza el número 1.
// Si, durante este proceso, la suma de cuadrados de dígitos nunca llega a ser 1, entonces el número se considera infeliz.
// Ejemplo:
// tomemos el número 19:
// 1² + 9² = 82 ,  8² + 2² = 68 ,  6² + 8²=100 , 1² + 0² + 0² = 1
// En este caso, el número 19 es feliz porque, al seguir el proceso, eventualmente llegamos a 1.
// Se espera que desarrolles una función que determine si un número dado es feliz o no es feliz.
// Si el numero dado es feliz se debe retornar la frase "Es feliz" y de caso contrario se debe retornar "No es feliz"

const esNumeroFeliz = (num) => {

}

// ----------------------------------------------------------------------------------------------------------------------------------------

// STRINGS

// CONVERTIR GUIONES/GUIONES BAJOS EN CAMELCASE
// Completa la función para que convierta palabras delimitadas por guiones bajos o guiones en notación camelCase
// La primera palabra en la salida debería estar en mayúscula solo si la palabra original estaba en mayúscula.
// Las siguientes palabras siempre deberían estar en mayúscula.
// Ejemplos:
// "the-stealth-warrior" se convierte en "theStealthWarrior"
// "The_Stealth_Warrior" se convierte en "TheStealthWarrior"
// "The_Stealth-Warrior" se convierte en "TheStealthWarrior"

const toCamelCase = (str) => {

}

module.exports = {
  numeroDeArmstrong,
  numeroDeFibonacci,
  esNumeroFeliz,
  toCamelCase
}
