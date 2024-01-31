//Números de Fibonacci
//Se espera que desarrolles una función que determine si un número dado es parte de la secuencia de Fibonacci. 
//La secuencia de Fibonacci es una sucesión matemática en la que cada número es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
//La función debe recibir un número como parámetro de entrada.
//Debe devolver un valor booleano (verdadero o falso) que indique si el número proporcionado pertenece a la secuencia de Fibonacci.

const numeroDeFibonacci = (num) => {
    if(numero === 0 || numero === 1) return true

    let prev = 0;
    let current = 0;

    // Realizar iteraciones para generar números de Fibonacci hasta que superen o igualen el número proporcionado
    while (actual < numero) {
        let siguiente = previo + actual;
        previo = actual;
        actual = siguiente;

        // Verificar si el número proporcionado es igual al número actual en la secuencia
        if (actual === numero) {
            return true;
        }
    }

    return false;
}


const esNumeroFeliz = (num) => {
    const calcularSumaCuadrados = (num) => {
        return num.toString().split('').reduce((sum, digit) => {
            const squaredDigit = parseInt(digit) ** 2;
            return sum + squaredDigit;
        }, 0);
    };

    if(num <= 0) return 'No es feliz'

    const historial = new Set();

    while (num !== 1 && !historial.has(num)) {
        historial.add(num);
        num = calcularSumaCuadrados(num);
    }

    return num === 1 ? 'Es feliz': 'No es feliz';
};

const 

module.exports = {
    esNumeroFeliz,
    numeroDeFibonacci
};
