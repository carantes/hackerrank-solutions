const BinarySearchTree = require('./index');

describe('22-Binary Tree', function () {

  test('A Tree 5 2 1 4 6 7 should have height equal to 3', () => {
    const tree = new BinarySearchTree();
    let root = tree.push(null, 3);
    tree.push(root, 5);
    tree.push(root, 2);
    tree.push(root, 1);
    tree.push(root, 4);
    tree.push(root, 6);
    tree.push(root, 7);
    expect(tree.getHeight(root)).toEqual(3);
  });

  test('A Tree 50 35 44 9 15 62 11 13 should have height equal to 4', () => {
    const tree = new BinarySearchTree();
    let root = tree.push(null, 20);
    tree.push(root, 50);
    tree.push(root, 35);
    tree.push(root, 44);
    tree.push(root, 9);
    tree.push(root, 15);
    tree.push(root, 62);
    tree.push(root, 11);
    tree.push(root, 13);
    expect(tree.getHeight(root)).toEqual(4);
  });
})

