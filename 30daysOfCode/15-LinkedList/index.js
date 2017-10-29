/*
  Insert Node at the end of a linked list 
  head pointer input could be NULL as well for empty list
*/

function Node(data){
  this.data=data;
  this.next=null;
}

function main() {  
  this.insert = function(head, data) {
    if (head == null) {
      head = new Node(data);
    }
    else {
      let node = head;
      
      while (node.next != null) {
        node = node.next;
      }
      
      node.next = new Node(data);
    }
    
    return head;
  }

  this.display=function(head) {
    var start=head;
    var stdout = '';
    
    while(start){
      stdout += start.data+ " ";
      start=start.next;
    }

    return stdout.trim();
  };
}

module.exports = new main();