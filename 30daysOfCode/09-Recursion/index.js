function main() {
  this.factorial = function (n) {
    if (n > 0) {
      return n * this.factorial(n-1);
    }
    else {
      return 1;
    }
  };
}

module.exports = new main();