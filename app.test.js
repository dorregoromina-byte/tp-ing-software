const sumar = require('./app');

test('La suma de 2 + 3 debe ser igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});
