const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description. What is the purpose of this project?',
      },

      {
        type: "input",
        name: "features",
        message: "Please list project features here.",
      },
      {
        type: "input",
        name: "technologiesUsed",
        message: "Please list technologies used in your project.",
      },
      {
        type: "input",
        name: "screenshot",
        message: "Please make sure you provide the relative path to the screenshot you want to use."
      },
      {
        type: "input",
        name: "deployedPage",
        message: "Please provide a link to your deployed site."
      },
      {
        type: "input",
        name: "installation",
        message: "Please provide a detailed walk-though on how to clone and install your application."
      },
      {
        type: "input",
        name: "test",
        message: "Please provide detail walk-through of required tests for this applicable.",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license.",
        choices: ["Apache 2.0", "GNU General Public v3.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost", "Creative Commons Zero", "Eclipse Public", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "The Unlicense","none"],
      },
      {
        type: "input",
        name: "credits",
        message: "Please list your collaborators/team members. You should also include links to their GitHub profiles.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please add guidelines to let users know how they can contribute to your project.",
      },
      {
        type: "input",
        name: "questions",
        message: "Please add any and all questions here",
      },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile(".README.md", generateMarkdown({ ...responses }));
      });

}

// function call to initialize program
init();
