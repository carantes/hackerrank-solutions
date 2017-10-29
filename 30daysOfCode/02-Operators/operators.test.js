const main = require('./index');

describe('02-Operators', function () {

  test('Given cost of 12.00, tip of 20% and tax of 8% then result is 15 dollars', () => {
    expect(main.calculateMealCost(12, 20, 8)).toBe('The total meal cost is 15 dollars.');
  });

})

