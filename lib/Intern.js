const Employee = require('./Employee')

class Intern extends Employee {
    // Add constructor, alter for Intern with properties and methods per the README
    constructor(name, id, email, school) {
        // Use super to call the object's parent 
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
      }
    
    getRole() {
        return "Employee";
      }

}

module.exports = Intern;