const Main = require('./index');

describe('20-BubbleSort', function () {

  test('Should reorder an array 3,2,1 to 1,2,3', () => {
    let data = [3,2,1];
    var main = new Main(data);
    expect(main.bubbleSort(data)).toBe('1,2,3');
  });

  test('Should reorder an array 1,5,8,4,3,6,2,9,7 to 1,2,3,4,5,6,7,8,9', () => {
    let data = [1,5,8,4,3,6,2,9,7];
    var main = new Main(data);
    expect(main.bubbleSort(data)).toBe('1,2,3,4,5,6,7,8,9');
  });

  test('Should return the first item of a sorted array', () => {
    let data = [3,2,1];
    var main = new Main(data);
    expect(main.first()).toBe('1');
  });

  test('Should return the last item of a sorted array', () => {
    let data = [3,2,1];
    var main = new Main(data);
    expect(main.last()).toBe('3');
  });

  test('Should return the number of swaps of a sorted array', () => {
    let data = [1,5,8,4,3,6,2,9,7];
    var main = new Main(data);
    expect(main.swaps()).toBe('13');
  });
})

