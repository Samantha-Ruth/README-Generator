// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./src/page-template');
const { writeFile } = require('./utils/generateReadMe');

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        /* Pass your questions in here */
        {type: 'input',
            name: 'userName',
            message: "What is your GitHub username?",
            validate: userNameInput => {
                if(userNameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username.")
                    return false;
                }
            }
        },
        {type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your email address.")
                return false;
            }
        }
    },
        {type: 'input',
        name: 'projectName',
        message: "What is the name of your project?",            
        validate: projectNameInput => {
            if(projectNameInput) {
                return true;
            } else {
                console.log("Please enter the name of your project.")
                return false;
            }
        }
    },
        {type: 'input',
        name: 'projectDescription',
        message: "Please write a short description of your project.",
        validate: projectDescriptionInput => {
            if(projectDescriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project.")
                return false;
            }
        }
    },
        {
            type: 'list',
            name: 'license',
            message: "What kind of license does your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            name: 'dependenciesCommand',
            message: "What command should be run to install dependencies?",
            validate: dependenciesCommandInput => {
                if(dependenciesCommandInput) {
                    return true;
                } else {
                    console.log("Please enter the command needed to install dependencies.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testsCommand',
            message: "What command should be entered to run tests?",
            validate: testsCommandInput => {
                if(testsCommandInput) {
                    return true;
                } else {
                    console.log("Please the command needed to run tests.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'toUse',
            message: "What does the user need to know about using the repo?",
            validate: toUseInput => {
                if(toUseInput) {
                    return true;
                } else {
                    console.log("Please enter information the user may need to know about using the repo.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'toContribute',
            message: "What does the user need to know about contributing to the repo?",
            validate: toContributeInput => {
                if(toContributeInput) {
                    return true;
                } else {
                    console.log("Please enter information the user needs to contribute to the repo.")
                    return false;
                }
            }
        }
    ])
};


//TODO: Create a function to write README file
    promptUser()
        .then(data => {
            return generateMarkdown(data);
            })
        .then(pageMd => {
            return writeFile(pageMd);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });



        // TODO: Create a function to initialize app
        // function init() { }

        // Function call to initialize app
        // init();
