const { esNumeroFeliz } = require("./app.js");

describe("Matematicas", () => {
    describe("Función Numero Feliz 😊", () => {
        test('Los numeros felices devuelven "Es feliz"', () => {
            expect(esNumeroFeliz(19)).toBe('Es feliz');
            expect(esNumeroFeliz(100)).toBe('Es feliz');
            expect(esNumeroFeliz(68)).toBe('Es feliz');
        });

        test('Los numeros infelices devuelven "No es feliz"', () => {
            expect(esNumeroFeliz(4)).toBe('No es feliz');
            expect(esNumeroFeliz(21)).toBe('No es feliz');
            expect(esNumeroFeliz(33)).toBe('No es feliz');
        });

        test('Los numeros negativos devuelven "No es feliz"', () => {
            expect(esNumeroFeliz(-523)).toBe('No es feliz');
            expect(esNumeroFeliz(-3)).toBe('No es feliz');
            expect(esNumeroFeliz(-7)).toBe('No es feliz');
            expect(esNumeroFeliz(-19)).toBe('No es feliz');

        });
    });
});
