// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  // Should add a badges to the licenses 
  ${addBadge(data.license)}


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
${viewLicense(data.license)}

## Credits
${data.credits}

## Contributors
${data.contributors}

## Questions
[GitHub Profile](https://github.com/${data.gitHub}/)
You can reach out to me at ${data.email}.
`;
}

module.exports = generateMarkdown;


// [GitHub Profile](https://github.com/${data.userName}/)  

// this checks to see what license was selected and adds the appropriate badge
const addBadge = licenseOption => 
  licenseOption == 'MIT' ? `
  ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
` :
  licenseOption == 'Apache 2.0' ? `
  ![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  ` :
  licenseOption == 'GNU General Public v3.0' ? `
  ![mit](https://img.shields.io/badge/License-GPLv3-blue.svg)
  ` :
  licenseOption == 'BSD 2-Clause' ? `
  ![BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
  ` :
  licenseOption == 'BSD 3-Clause' ? `
  ![BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
  ` :
  licenseOption == 'Boost' ? `
  ![Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)
  ` :
  licenseOption == 'Eclipse Public' ? `
  ![Eclipse Public](https://img.shields.io/badge/License-EPL_1.0-red.svg)
  ` :
  licenseOption == 'GNU General' ? `
  ![GNU Lesser](https://img.shields.io/badge/License-AGPL_v3-blue.svg)
  ` :
  licenseOption == 'GNU Lesser' ? `
  ![GNU Lesser](https://img.shields.io/badge/License-LGPL_v3-blue.svg)
  ` :
  licenseOption == 'Mozilla' ? `
  ![Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
  ` :
  licenseOption == 'The Unlicense' ? `
  ![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)
  ` :
  `
  Invalid license choice.
  `;




// code below checks to see what license was picked. The code will run and if statement and provide the open source material

const viewLicense = licenseOption => 
licenseOption == 'MIT' ? `
This application is covered by the MIT License, please view the terms and condition [here](https://opensource.org/licenses/MIT)
`:
licenseOption == 'Apache 2.0' ? `
This application is covered by the Apache 2.0 License,  please view the terms and conditions [here](https://opensource.org/license/apache-2-0/)
`:
licenseOption == 'GNU General Public v3.0' ? `
This application is covered by the GNU General Public v3.0 License,  please view the terms and conditions [here](https://opensource.org/license/)gpl-3-0/
`:
licenseOption == 'BSD 2-Clause' ? `
This application is covered by the BSD 2-Clause License,  please view the terms and conditions [here](https://opensource.org/license/bsd-2-clause/)
`:
licenseOption == 'BSD 3-Clause' ? `
This application is covered by the BSD 3-Clause License,  please view the terms and conditions [here](https://opensource.org/license/bsd-3-clause/)
`:
licenseOption == 'Boost' ? `
This application is covered by the Boost License,  please view the terms and conditions [here](https://opensource.org/license/bsl1-0-html/)
`:
licenseOption == 'Eclipse Public' ? `
This application is covered by the Eclipse Public License,  please view the terms and conditions [here](https://opensource.org/license/)eclipse-1-0-php/
`:
licenseOption == 'GNU General' ? `
This application is covered by the GNU General License,  please view the terms and conditions [here](https://opensource.org/license/gpl-1-0/)
`:
licenseOption == 'GNU Lesser' ? `
This application is covered by the GNU Lesser License,  please view the terms and conditions [here](https://opensource.org/license/lgpl-3-0/)
`:
licenseOption == 'Mozilla' ? `
This application is covered by the Mozilla License,  please view the terms and conditions [here](https://opensource.org/license/mpl-2-0/)
`:
licenseOption == 'The Unlicense' ? `
This application is covered by the The Unlicense License,  please view the terms and conditions [here](https://opensource.org/license/unlicense/)
`:
`Invalid license choice.`;