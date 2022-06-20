# Professional README Generator

## Description

This project was an introduction to the backend of a webpage, working with node and npm dependencies.  This project uses node and npm to automatically generate a professional read-me markdown document based on user input.  

This project helped me understand how to work from the command line using node.js.  To do this, I learned about the node package manager (npm), specifically the "inquirer" dependency to prompt user for information and the node file system to write new files, and I learned about Javascript ES6 language and the use of arrow functions.  I also was introduced to template literals, how to modularize the code using "require" and "module.exports", and how to refactor the code and use a promise chain.  I also learned how to destructure templateData to create variables to hold data for conditional sections (eg license), how to utilize the spread and rest operators, and how to create a function with a template literal. I also learned how to use the keyword "new" to create a promise object with resolve and reject parameters. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Questions](#questions)

## Installation

If the user already has node installed on their device, they can download this project and run "npm init" and then "npm install" to download the dependencies.  Next, the user should enter "node index.js" into their command line. 

## Usage

The user will receive a series of prompts, asking for github username, email, the name of the users project, project description, what dependencies should be installed, what command should be used to run tests, and information the user should know about the repo and about contributing to the repo.  The user will also be asked if they used a license to create their project, and if so, what kind.  

When the user is finished entering their information, a ReadMe.md file is created with the project name on top, description, and a Table of Contents.  The Table of Contents includes Installation, Usage, License, Contributing, Tests, and Questions.  When the user clicks on an item in the Table Of Contents, they are brought to that section in the ReadMe file.  If the user entered a license, a badge with the user's license will appear at the top of the page, and information regarding the license type will appear in the Table of Contents and as an individual section in the readMe. If the user did not use a license for their project, no badge will appear and there will be no license section in the document or in the Table of Contents. 

![ReadMe-Generator](https://user-images.githubusercontent.com/64170123/174509020-317d8dd2-ee00-4488-865a-cb5cd6ebbf21.jpg)

## Links

Link to video of project: https://drive.google.com/file/d/1FXDS7nnId151ynoSaCaO-GIDmZ_eQtU0/view

The link to the project is here: https://samantha-ruth.github.io/README-Generator (which will show you this page)

The url of the Git repository is here: https://github.com/Samantha-Ruth/README-Generator

## Questions

If you have any questions about the repo, open an issue or you can find more of my work at (https://gitHub.com/Samantha-Ruth).

