const { Book, EmptyBook, MyBook } = require('./index');

describe('13-Abstract Class', function () {

  test('Should not construct direct an abstract class', () => {
    expect(() => new Book()).toThrow(new Error('Cannot construct Abstract instances directly'));
  });

  test('An empty class should return parent class display', () => {
    const emptyBook = new EmptyBook();
    expect(emptyBook.display()).toBe('Implement the \'display\' method!');
  });

  test('My Book should return title, author and price on display', () => {
    const myBook = new MyBook('My Title', 'I am the author', '10.00');
    expect(myBook.display()).toBe('Title: My Title, Author: I am the author, Price: 10.00');
  });

})

