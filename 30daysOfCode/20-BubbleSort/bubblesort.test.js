const main = require('./index');

describe('20-BubbleSort', function () {

  test('Should reorder an array 3,2,1 to 1,2,3', () => {
    let data = [3,2,1];
    expect(main.bubbleSort(data)).toBe('1,2,3');
  });


  test('Should reorder an array 1,5,8,4,3,6,2,9,7 to 1,2,3,4,5,6,7,8,9', () => {
    let data = [1,5,8,4,3,6,2,9,7];
    expect(main.bubbleSort(data)).toBe('1,2,3,4,5,6,7,8,9');
  });
})

