function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.deepth = 0;

  this.getHeight = function (node){
    if(!node) return -1;

    let leftHeight = this.getHeight(node.left);
    var rightHeight = this.getHeight(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
 }

  this.push = function (currentNode, value) {
    if (!currentNode) {
      this.root = new Node(value);
      return this.root;
    }

    if (value <= currentNode.value){
      if (!currentNode.left){
        currentNode.left = new Node(value);
      }
      else{
        this.push(currentNode.left, value);
      }
    }
    else{
      if(!currentNode.right){
        currentNode.right = new Node(value);
      }
      else{
        this.push(currentNode.right, value);
      }
    }

    return this.root;    
  }
}

module.exports = BinarySearchTree;