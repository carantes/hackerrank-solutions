function Main() {
  this.getDeleteCountUsingIndexOf = function(a, b) {

    var aChars = a.split("");
    var bChars = b.split("");
    var bigger = aChars.length > bChars.length ? aChars : bChars;
    var smaller = aChars.length <= bChars.length ? aChars : bChars;  
    
    var biggerIndex = bigger.length-1;
    
    while (biggerIndex >= 0) {
      let char = bigger[biggerIndex];
      let searchIndex = smaller.indexOf(char);
      
      if (searchIndex > -1) {
        bigger.splice(biggerIndex, 1);
        smaller.splice(searchIndex, 1);
      }
      
      biggerIndex--;
    }
  
    return bigger.length + smaller.length;
  }

  this.getDeleteCountUsingPushAndShift = function (a, b) {
    
    let alphabetically = (a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }

    let aChars = a.split('').sort(alphabetically);
    let bChars = b.split('').sort(alphabetically);
  
    var count = [];
    while (aChars.length > 0 || bChars.length > 0) {
      if (aChars[0] === undefined) {
        //End of Array A
        count.push(bChars.shift());
      }
      else if (bChars[0] === undefined) {
        //End of Array B
        count.push(aChars.shift());
      }
      else if (aChars[0] < bChars[0]) {
        count.push(aChars.shift());
      } else if (aChars[0] > bChars[0]) {
        count.push(bChars.shift());
      } else {
        //Found the same letter in A and B
        aChars.shift();
        bChars.shift();
      }
    }
  
    return count.length;
  }
}

module.exports = new Main();