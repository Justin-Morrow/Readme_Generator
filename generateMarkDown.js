    function generateMarkDown(answers) {
        return `
    # ${answers.title}
    
    ## Table of Contents
        *1. [Description](#description)
        * [Install](#install)
        3. [Usage](#usage)
        4. [License](#license)
        5. [Contribute](#contribute)
        6. [Tests](#tests)
        7. [Questions](#questions)
        
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