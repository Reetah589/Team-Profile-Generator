const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    officeNumber(){
        return "officeNumber";
    }
}

module.exports = Manager;

//Test sample code from Jest documentation
//const sum = require('./sum');

//test('adds 1 + 2 to equal 3', () => {
  //expect(sum(1, 2)).toBe(3);
//});
