// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === None) {
    return "";
  }
  return console.log("Badge Entered");
  // need to create a new category (.badge?) and push into array.
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === None) {
    return "";
  }
  return console.log("License Link");
  //do all links start from the same place? ${license}@something.com?
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === None) {
    return "";
  }
  return console.log("license section of README");
}

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {

  const { userName, ...other } = generateMarkdown;
  return `
  # ${other.projectName}
![GitHub License](https://img.shields.io/github/license/:${userName}/:${other.projectName})
## Description
${other.projectDescription}}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)    
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
To install dependences, run the following command: ${other.dependenciesCommand}


## Usage
${other.toUse}


## License
${other.license}


## Contributing
${other.toContribute}


## Tests
To run tests, enter the following command: ${other.testsCommand}


## Questions 
If you have any questions about the repo, open an issue or contact me directly at ${other.email}.  You can find more of my work at (https://gitHub.com/${userName}).
`;

}