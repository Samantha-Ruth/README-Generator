// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
![GitHub License](https://img.shields.io/badge/License-${licenseText}-blue.svg)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
* [License](#license)
  `;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
## License
${licenseText}
  `; 
};

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {

  const { userName, ...other } = generateMarkdown;
  return `
  # ${other.projectName}
  ${renderLicenseBadge(other.license)} 

## Description
${other.projectDescription}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)    
${renderLicenseLink(other.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install dependences, run the following command: ${other.dependenciesCommand}
## Usage
${other.toUse}
${renderLicenseSection(other.license)}
## Contributing
${other.toContribute}
## Tests
To run tests, enter the following command: ${other.testsCommand}
## Questions 
If you have any questions about the repo, open an issue or contact me directly at ${other.email}.  You can find more of my work at (https://gitHub.com/${userName}).
`;
};