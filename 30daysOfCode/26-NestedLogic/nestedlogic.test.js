const main = require('./index');

describe('26-Nested Logic', function () {

  test('If the book is returned on or before the expected return date, no fine will be charged', () => {
    expect(main.processData(['4 6 2015', '6 6 2015'])).toBe(0);
    expect(main.processData(['23 12 1234', '19 9 2468'])).toBe(0);
    expect(main.processData(['2 6 2014', '5 7 2014'])).toBe(0);
    expect(main.processData(['2 6 2014', '5 7 2014'])).toBe(0);
  });

  test('If the book is returned 15 days late, fine equal 15 hackos per day (225) ', () => {
    expect(main.processData(['21 6 2015', '6 6 2015'])).toBe(225);
  });

  test('If the book is returned 2 months late, fine equal 500 hackos per month (1000)', () => {
    expect(main.processData(['21 8 2015', '6 6 2015'])).toBe(1000);
  });

  test('If the book is returned a year late, fine equal 1000 hackos', () => {
    expect(main.processData(['1 1 2016', '6 12 2015'])).toBe(10000);
    expect(main.processData(['8 4 12', '1 1 1'])).toBe(10000);
  });

})

