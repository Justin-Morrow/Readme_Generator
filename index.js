// External packages

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./generateMarkDown');
const util = require('util');
const path = require('path');

let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: "input",
        message: "Tell about your application.",
        name: "logo"
    },
    {
        type: "input",
        message: "Give the steps to install the application.",
        name: "installation"
    },
    {
        type: "input",
        message: "Write the instructions on how to use the application.",
        name: "Use"
    },
    {
        type: 'list',
        message: 'Select the license of your application.',
        choices: ['GNU GPLv3.0 License', 'MIT License', 'Apache-2.0 License', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please note the users who contributed to this project.',
        name: 'contribute'
    },
    {
        type: "input",
        message: "What is your GitHub user ID?",
        name: "logo"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]

