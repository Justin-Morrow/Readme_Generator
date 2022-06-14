function generateMarkdown(title, description, install, use, license, credits, tests, github, email, license) {

    return `
    
    ${license}
    # Project Name: ${title}
    
    ## Table of contents
    1. [Description](#description)
    2. [Install](#install)
    3. [Use](#use)
    4. [License](#license)
    5. [Credits](#credits)
    6. [Tests](#tests)
    7. [Questions](#questions)
    
    <h2 id="description"> Project Description </h2>
    ${description}
    
    ## Installation 
    ${installation}
    
    ## Use
    ${use}
    
    ## License 
    This application is covered under the ${license}.
    ## Credits 
    ${credits}
    
    ## Tests 
    ${tests}
    
    ## Questions 
    If you have any questions, please contact me to the information listed below.
    
    * Email: ${email}
    * GitHub: [${github}](https://github.com/${github})
    
    `};

    module.exports = generateMarkdown;