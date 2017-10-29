function main() {
  this.i = 4;
  this.d = 4.0;
  this.s = 'HackerRank';

  this.sumInteger = function sumInteger(num) {
    return this.i + num;
  }

  this.sumDouble = function sumDouble(num) {
    return Number.parseFloat(this.d + num).toPrecision(2);
  }

  this.concatString = function concatString(str) {
    return `${this.s} ${str}`;
  }
}

module.exports = new main();