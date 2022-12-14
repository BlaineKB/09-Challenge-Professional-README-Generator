// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can your project be used?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Can you please list important features of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is required to install your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the instructions to test your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which of the following licenses would you like to select for your project?',
      choices: ["Apache 2.0", "MIT", "No License"]
    },
  ])
  .then(data => {
    writeToFile(generateMarkdown(data))
  })
};  

// Function to write README file
function writeToFile(data) {
  fs.writeFile('./sample/README.md', data, err => {
    if(err) {
      console.log(err)
      return
    }
    console.log("Created README.md")
  })
}

// Function to initialize app
function init() {
  questions()
}

// Function call to initialize app
init();


module.exports = writeToFile