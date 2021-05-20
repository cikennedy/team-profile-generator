const Employee = require('./Employee')

class Manager extends Employee {
    // Add constructor, alter for Manager with properties and methods per the README
    constructor(name, id, email, office) {
        // Use super to call the object's parent 
        super(name, id, email);
        this.office = office;
    }

    getOffice() {
        return this.office;
      }
    
    getRole() {
        return "Manager";
      }

}

module.exports = Manager;