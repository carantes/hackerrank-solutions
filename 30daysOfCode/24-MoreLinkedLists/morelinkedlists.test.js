const main = require('./index');

describe('24-More Linked Lists', function () {

  test('Delete duplicate nodes in a short 122334 list', () => {
    var t = [1, 2, 2, 3, 3, 4];
    var head = null;
    
    for(i=0; i < t.length; i++){
      var data=parseInt(t[i]);
      head = main.insert(head,data);
    }
    
    expect(main.display(head)).toBe('1 2 2 3 3 4');

    head = main.removeDuplicates(head);
    expect(main.display(head)).toBe('1 2 3 4');
  });

  test('Delete duplicate nodes in a big 12222333345764555 list', () => {
    var t = [1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 7, 6, 4, 5, 5, 5];
    var head = null;
    
    for(i=0; i < t.length; i++){
      var data=parseInt(t[i]);
      head = main.insert(head,data);
    }
    
    expect(main.display(head)).toBe('1 2 2 2 2 3 3 3 3 4 5 7 6 4 5 5 5');

    head = main.removeDuplicates(head);
    expect(main.display(head)).toBe('1 2 3 4 5 7 6 4 5');
  });

})

