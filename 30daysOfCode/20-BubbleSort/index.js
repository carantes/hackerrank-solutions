function Main(data) {
  this.data = data || [];
  this.sorted = false;
  this.swapCount = 0;

  this.first = function first() {
    if (!this.sorted) {
      this.bubbleSort();
    }

    return this.data[0].toString();
  }

  this.last = function last() {
    if (!this.sorted) {
      this.bubbleSort();
    }

    return this.data[this.data.length-1].toString();
  }

  this.swaps = function swaps() {
    if (!this.sorted) {
      this.bubbleSort();
    }

    return this.swapCount.toString();
  }

  this.bubbleSort = function bubbleSort() {
    var data = this.data;
    var endPosition = data.length -1;
    var swapPosition;

    while (endPosition > 0) {
      swapPosition = 0;

      for(var i = 0; i < endPosition; i++) {
        let x = data[i];
        let y = data[i+1];

        if (x > y) {
          let tmp = x;
          data[i] = y;
          data[i+1] = tmp;
          swapPosition = i;
          this.swapCount++;
        }
      } // end for

      endPosition = swapPosition;
    }

    this.sorted = true;
    return data.toString();
  }
}

module.exports = Main;