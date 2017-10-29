const main = require('./index');

describe('09-Recursion', function () {

  test('Factorial of 3 should be equal 6', () => {
    expect(main.factorial(3)).toBe(6);
  });

  test('Factorial of 9 should be equal 720', () => {
    expect(main.factorial(6)).toBe(720);
  });

})

