const main = require('./index');

describe('15-LinkedList', function () {

  test('Insert a node at the tail of a linked list', () => {
    var t = [2, 3, 4, 1];
    var head = null;
    
    for(i=0; i < t.length; i++){
      var data=parseInt(t[i]);
      head = main.insert(head,data);
    }
    
    expect(main.display(head)).toBe('2 3 4 1');
  });

})

