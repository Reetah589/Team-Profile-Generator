const Employee = require('../lib/Employee.js');

// adding new employee
test('create a new employee name', () => {
    const employee = new Employee ('Jared', 1, 'jared@fakemail.com');
  
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('jared@fakemail.com')
});

test('return new employee', () => {
    const employee = new Employee ('Jared', 1, 'jared@fakemail.com');

    expect(employee.getRole()).toBe ('Employee');
})
