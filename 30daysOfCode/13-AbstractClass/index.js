class Book {
  constructor() {
    if (new.target === Book) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }

  display() {
    return 'Implement the \'display\' method!';
  }
}

class EmptyBook extends Book {
  constructor(title, author, price) {
    super();
  }
}

class MyBook extends Book {
  constructor(title, author, price) {
    super();
    
    this.title = title;
    this.author = author;
    this.price = price;
  }

  display() {
    return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`
  }
}

module.exports = { Book, EmptyBook, MyBook };