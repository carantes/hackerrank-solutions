function Main() {
  this.processData = function(data) {
    //Enter your code here
    let numCases = data[0];
    let results = []
    for (var i=1; i <= numCases; i++) {
        isPrime(parseInt(data[i])) ? results.push('Prime') : results.push('Not prime');
    }
    return results.toString();
  } 

  /*function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
  }*/

  function isPrime(value) { 
    for(let i = 2, s = Math.sqrt(value); i <= s; i++) {
      if(value % i === 0) return false; 
    } 
    return value !== 1;
  }

}

module.exports = new Main();