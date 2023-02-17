// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



## Description
${data.description}

## Table of Contents
* [Features](#features)
* [Technologies Used](#technologiesUsed)
* [Screenshots](#screenshot)
* [Deployed Page](#deployedPage)
* [Installation](#installation)
* [Testing](#testing)
* [License](#license)
* [Credits](#credits)
* [Contributors](#contributors)
* [Questions](#questions)

## Features
${data.features}

## Technologies Used
${data.technologiesUsed}

## Screenshot
![alt-text](${data.screenshot})

## Deployed Page
${data.deployedPage}

## Installation
${data.installation}

## Test
${data.test}

## License
${checkLicense(data.license)}

## Credits
${data.credits}

## Contributors
${data.contributors}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;




// code below checks to see what license was picked. The code will run and if statement and provide the open source material

const checkLicense = licenseChoice => 
  licenseChoice == 'MIT' ? `
    This application is covered by the MIT License, please view the terms and conditions https://opensource.org/licenses/MIT
  ` :
  licenseChoice == 'Apache 2.0' ? `
    This application is covered by the Apache 2.0 License,  please view the terms and conditions https://opensource.org/license/apache-2-0/
  ` :
  licenseChoice == 'GNU General Public v3.0' ? `
    This application is covered by the GNU General Public v3.0 License,  please view the terms and conditions https://opensource.org/license/gpl-3-0/
  ` :
  licenseChoice == 'BSD 2-Clause' ? `
    This application is covered by the BSD 2-Clause License,  please view the terms and conditions https://opensource.org/license/bsd-2-clause/
  ` :
  licenseChoice == 'BSD 3-Clause' ? `
    This application is covered by the BSD 3-Clause License,  please view the terms and conditions https://opensource.org/license/bsd-3-clause/
  ` :
  licenseChoice == 'Boost' ? `
    This application is covered by the Boost License,  please view the terms and conditions https://opensource.org/license/bsl1-0-html/
  ` :
  licenseChoice == 'Eclipse Public' ? `
  This application is covered by the Eclipse Public License,  please view the terms and conditions https://opensource.org/license/eclipse-1-0-php/
  ` :
  licenseChoice == 'GNU Affero' ? `
  This application is covered by the GNU Affero License,  please view the terms and conditions https://opensource.org/license/agpl-v3/
` :
  licenseChoice == 'GNU General' ? `
  This application is covered by the GNU General License,  please view the terms and conditions https://opensource.org/license/gpl-1-0/
  ` :
  licenseChoice == 'GNU Lesser' ? `
  This application is covered by the GNU Lesser License,  please view the terms and conditions https://opensource.org/license/lgpl-3-0/
  ` :
  licenseChoice == 'Mozilla' ? `
  This application is covered by the Mozilla License,  please view the terms and conditions https://opensource.org/license/mpl-2-0/
  ` :
  licenseChoice == 'The Unlicense' ? `
  This application is covered by the The Unlicense License,  please view the terms and conditions https://opensource.org/license/unlicense/
  ` :
  `
    Invalid license choice.
  `;