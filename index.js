// Include necessary packages/requirements 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, 
// employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, 
// email address, and office number
// THEN I am presented with a menu with the option to add 
// an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, 
// and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, 
// and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

/* 

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
*/


function teamProfile() {
    // Get manager's name, ID, email, office #
    function teamManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'Please enter the name of the team manager.',
                // Add validation
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'Please enter the employee ID of the team manager.',
                // Add validation
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the email address of the team manager.',
                // Add validation
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'Please enter the office number of the team manager.',
                // Add validation
            },
        ])
    }

    function addTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoice',
                message: 'Which additional member would you like to add to the team?',
                choices: [
                    'Engineer',
                    'Intern',
                    'None, finish building my team.'
                ]

            },
        ])
    }

    function teamEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineer',
                message: 'Please enter the name of the engineer.',
                // Add validation
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter the employee ID of the engineer.',
                // Add validation
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the email address of the engineer.',
                // Add validation
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the GitHub username of the engineer.',
                // Add validation
            },
        ])
    }

    function teamIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intern',
                message: 'Please enter the name of the intern.',
                // Add validation
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Please enter the employee ID of the intern.',
                // Add validation
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the email address of the intern.',
                // Add validation
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the school of the intern.',
                // Add validation
            },
        ])
    }
}