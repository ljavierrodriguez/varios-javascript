
const { expect, test } = require('@jest/globals');
const { esMayor } = require('./app');

test('validar el mayor de tres numeros', () => {
    expect(esMayor(10, 11, 5)).toBe(`b = 11`);
});