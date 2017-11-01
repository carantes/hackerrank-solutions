const Main = require('./index');

describe('28-RegEx', function () {

  test('Should return only users with gmail accounts', () => {
    const data = [
      'riya riya@gmail.com', 
      'julia julia@julia.me', 
      'julia sjulia@gmail.com', 
      'julia julia@gmail.com',
      'samantha samantha@gmail.com',
      'tanya tanya@gmail.com'
    ];
    const main = new Main(data);
    const users = main.filterUsers();
    expect(users).toHaveLength(5);
    expect(users).not.toContain('julia julia@julia.me');
  });

  test('Should return users names in alphabetical order', () => {
    const data = [
      'riya riya@gmail.com', 
      'julia julia@julia.me', 
      'julia sjulia@gmail.com', 
      'julia julia@gmail.com',
      'samantha samantha@gmail.com',
      'tanya tanya@gmail.com'
    ];
    const main = new Main(data);
    const users = main.filterUsers();
    expect(users[0]).toBe('julia');
    expect(users[1]).toBe('julia');
    expect(users[2]).toBe('riya');
    expect(users[3]).toBe('samantha');
    expect(users[4]).toBe('tanya');
  });
})

