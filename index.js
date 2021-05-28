// Include necessary packages/requirements 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

The tests for these classes (in the `_tests_` directory) must ALL pass.

Add validation to ensure that user input is in the proper format.
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
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a name."

                }
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'Please enter the employee ID of the team manager.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid manager ID number."
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the email address of the team manager.',
                // Add validation
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'Please enter the office number of the team manager.',
                // Add validation
                validate: answer => {
                    
                }
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
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter the employee ID of the engineer.',
                // Add validation
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the email address of the engineer.',
                // Add validation
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the GitHub username of the engineer.',
                // Add validation
                validate: answer => {
                    
                }
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
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Please enter the employee ID of the intern.',
                // Add validation
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the email address of the intern.',
                // Add validation
                validate: answer => {
                    
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the school of the intern.',
                // Add validation
                validate: answer => {
                    
                }
            },
        ])
    }
}