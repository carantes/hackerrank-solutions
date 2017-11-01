function Main(data) {
  this.data = data;
  
  this.filterUsers = function () {
    return this.data
      .map(row => new User(row))
      .filter(user => filterByRegex(user.email, /@gmail.com/g))
      .map(user => user.name)
      .sort()
  }
}

function User(data) {
  this.name = data.split(' ')[0];
  this.email = data.split(' ')[1];
}

function filterByRegex(str, expression) {
  const pattern = expression;
  return pattern.test(str);
}

module.exports = Main;