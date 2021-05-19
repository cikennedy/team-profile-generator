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

function teamProfile() {
    // Get manager's name, ID, email, office #
    function teamManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'Please enter the name of the team manager.',
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'Please enter the employee ID of the team manager.',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the email address of the team manager.',
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'Please enter the office number of the team manager.',
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
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter the employee ID of the engineer.',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the email address of the engineer.',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the GitHub username of the engineer.',
            },
        ])
    }

    function teamIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intern',
                message: 'Please enter the name of the intern.',
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Please enter the employee ID of the intern.',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the email address of the intern.',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the school of the intern.',
            },
        ])
    }
}