const main = require('./index');

describe('25-Time and Complexity', function () {

  test('Simple list of not prime and prime numbers', () => {
    var data = [3, 12, 5, 7];
    expect(main.processData(data)).toBe('Not prime,Prime,Prime');
  });

  test('Long numbers run without timeout', () => {
    var data = [3, 1000000007, 100000003, 1000003];
    expect(main.processData(data)).toBe('Prime,Not prime,Prime');
  });

  test('Number 1 is not prime', () => {
    var data = [1, 1];
    expect(main.processData(data)).toBe('Not prime');
  });

})
