// External packages

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./generateMarkDown')
const util = require('util');
const path = require('path');

let questions = [
    {
        type: 'input',
        message: "What is the title of your repository?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Tell about your application.",
        name: 'description'
    },
    {
        type: 'input',
        message: "Give the steps to install the application.",
        name: 'install'
    },
    {
        type: 'input',
        message: "Write the instructions on how to use the application.",
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select the license of your application.',
        choices: ['GPLv3.0', 'MIT', 'APACHE2.0', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please note the users who contributed to this project.',
        name: 'contribute'
    },
    {
        type: 'input',
        message: "Did you run any tests?",
        name: 'tests'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your GitHub user ID?",
        name: 'github'
    },
]

function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = generateMarkDown(answers)
            fs.writeFile('README.md', mark, function (err) {        
            if (err) {
                console.log('File not saved', err)
            } else {
                console.log('Success: README GENERATED')
            }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}
runQuery();