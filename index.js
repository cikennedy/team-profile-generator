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

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html");

const render = require("./src/page-template.js");

const newTeam = [];
const teamID = [];

function teamProfile() {
    // Get manager's name, ID, email, office #
    function teamManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter the name of the team manager.',
                // Add validation
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a valid name.";
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
                    return "Please enter a valid manager ID number.";
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the email address of the team manager.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'Please enter the office number of the team manager.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid office ID number.";
                }
            },
        ])
        .then(answers => {
            const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
            newTeam.push(newManager);
            teamID.push(answers.managerID);
            addTeam();
        });
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
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    teamEngineer();
                    break;
                case "Intern":
                    teamIntern();
                    break;
                default:
                    createTeam();
            }
        });
    }

    function teamEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Please enter the name of the engineer.',
                // Add validation
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a valid name.";
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter the employee ID of the engineer.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid engineer ID number.";
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the email address of the engineer.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the GitHub username of the engineer.',
                // Add validation
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a valid GitHub username.";
                }
            }
        ]).then(answers => {
            const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            newTeam.push(newEngineer);
            teamID.push(answers.engineerID);
            addTeam();
        })
    }

    function teamIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Please enter the name of the intern.',
                // Add validation
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a valid name.";
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Please enter the employee ID of the intern.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid intern ID number.";
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the email address of the intern.',
                // Add validation
                validate: answer => {
                    const answerPass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (answerPass) {
                        return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the school of the intern.',
                // Add validation
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a school.";
                }
            }
        ]).then(answers => {
            const newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
            newTeam.push(newIntern);
            teamID.push(answers.internID);
            addTeam();
    });
}

function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(newTeam), "utf-8");
}

teamManager();

}

teamProfile();