function main() {

  this.bubbleSort = function bubbleSort(data) {
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
        }
      } // end for

      endPosition = swapPosition;
    }

    console.log("data", data.toString());
    return data.toString();
  }
}

module.exports = new main();