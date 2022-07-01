function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
    }
    return '';
  } 
  
  function generateMarkDown(answers) {
        return `
# ${answers.title}
    
${renderLicenseBadge(answers.license)}
## Table of Contents
* [Description](#description)
* [Install](#install)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)
        
## Description
${answers.description}
        
## Install
${answers.install}
        
## Usage
${answers.usage}
        
## License 
This application is covered under the ${answers.license}

## Contribute
${answers.contribute}
        
## Tests 
${answers.tests}
        
## Questions 
${answers.email}
${answers.github}
    `
}
    
    module.exports = generateMarkDown