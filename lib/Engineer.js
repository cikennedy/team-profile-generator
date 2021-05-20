const Employee = require('./Employee')

class Engineer extends Employee {
    // Add constructor, alter for Engineer 
    constructor(name, id, email, github) {
        // Use super to call the object's parent 
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
      }
    
      getRole() {
        return "Employee";
      }

}

module.exports = Engineer;