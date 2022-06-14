// External packages

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules

// Inquirer prompts for userResponses


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
// Call GitHub api for user info

// Pass Inquirer userResponses and GitHub userInfo to generateMarkdown

 // Write markdown to file