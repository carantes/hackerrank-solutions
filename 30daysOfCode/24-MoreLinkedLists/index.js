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

  this.removeDuplicates = function (head) {
    let current = head;
    let next;

    while (current.next) {
      next = current.next;
      
      while (current.data === next.data) {
        if (next.next) {
          current.next = next.next;
          next = next.next;
        }
        else {
          current.next = null;
          break;
        }
      }
      
      current = next;
    }

    return head;
  }
}

module.exports = new main();