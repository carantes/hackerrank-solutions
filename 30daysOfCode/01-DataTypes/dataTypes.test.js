const main = require('./index');

describe('01-Data Types', function () {

  test('Print the sum of both integer variables on a new line', () => {
    expect(main.sumInteger(12)).toBe(16);
  });

  test('Print the sum of the double variables on a new line', () => {
    expect(main.sumDouble(4.0)).toBe('8.0');
  });

  test('Concatenate and print the String variables on a new line', () => {
    expect(main.concatString('is the best place to learn and practice coding!')).toBe('HackerRank is the best place to learn and practice coding!');
  });

})

