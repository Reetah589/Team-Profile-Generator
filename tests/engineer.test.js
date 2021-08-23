const Engineer = require('../lib/Engineer.js');

// adding new engineer 
test('create a new engineer name', () => {
    const engineer = new Engineer ('Alec', 2, 'alec@fakemail.com', 'ibalec');
  
    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('alec@fakemail.com')
    expect(engineer.github).toBe('ibalec')
});

test('role is equal to engineer', () => {
    const engineer = new Engineer ('Alec', 2, 'alec@fakemail.com', 'ibalec');

    expect(engineer.getRole()).toBe ('Engineer');
});

