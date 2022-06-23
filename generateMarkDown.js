    function generateMarkDown(answers) {
        return `
# ${answers.title}
    
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