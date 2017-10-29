function main() {
  this.calculateMealCost = function calculateMealCost(cost, tip, tax) {
    const result = Number.parseFloat(cost + (cost * tip/100) + (cost * tax/100)); 
    return `The total meal cost is ${result.toFixed(0)} dollars.`;
  }
}

module.exports = new main();