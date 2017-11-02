function main() {

  this.processData = function (data) {
    if (data.length < 2) throw new Error('Process Data expect an array with two rows');

    const returnDate = data[0].split(' ');
    const expectedDate = data[1].split(' ');
    const fine = calculateFine(returnDate, expectedDate);
    
    return fine;
  }

  function calculateFine (returnDate, expectedDate) {
    const fineMin = 0;
    const finePerDay = 15;
    const finePerMonth = 500;
    const fineMax = 10000;

    const returnDay = parseInt(returnDate[0]);
    const returnMonth = parseInt(returnDate[1]);
    const returnYear = parseInt(returnDate[2]);
    const expectedDay = parseInt(expectedDate[0]);
    const expectedMonth = parseInt(expectedDate[1]);
    const expectedYear = parseInt(expectedDate[2]);

    if (returnYear > expectedYear) {
      fine = fineMax;
    }
    else if (returnYear === expectedYear) {
      if (returnMonth > expectedMonth) {
        fine = finePerMonth * (returnMonth - expectedMonth);
      }
      else if (returnMonth === expectedMonth) {
        if (returnDay > expectedDay) {
          fine = finePerDay * (returnDay - expectedDay);
        } else {
          fine = fineMin;
        }
      }
      else {
        fine = fineMin;
      }
    }
    else {
      fine = fineMin;
    }

    return fine;
  }
}

module.exports = new main();