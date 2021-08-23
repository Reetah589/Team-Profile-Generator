const Intern = require ('../lib/Intern');

//adding intern
test ('adding an intern', () => {
    const intern = new Intern ('John', 4, 'john@fakemail.com', 'UT Boot Camp');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe(4);
    expect(intern.email).toBe('john@fakemail.com');
    expect(intern.getSchool()).toBe('UT Boot Camp');
    expect(intern.getRole()).toBe('Intern');
});

