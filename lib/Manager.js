const Employee = require('./Employee')

class Manager extends Employee {
    // Add constructor 
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