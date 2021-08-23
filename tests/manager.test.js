const Manager = require('../lib/Manager');

//adding new manager
test ('creating new manager', () => {
    const manager = new Manager ('Grace', 3, 'grace@fakemail.com', 1985);

    expect(manager.name).toBe('Grace');
    expect(manager.id).toBe(3);
    expect(manager.email).toBe('grace@fakemail.com');
    expect(manager.getOfficeNumber()).toBe(1985);
});

test ('the get role to be manager', () => {
    const manager = new Manager ('Grace', 3, 'grace@fakemail.com', 1985);

    expect(manager.getRole()).toBe ('Manager');
});