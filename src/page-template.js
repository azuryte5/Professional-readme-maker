var year= new Date().getFullYear()

module.exports = readmeData => {
  console.log(readmeData);

  return `# Title: ${readmeData.title}

  [![License: ${readmeData.license}](https://img.shields.io/badge/License-${readmeData.license}-blue.svg)](https://opensource.org/licenses/${readmeData.license})

  ## Table of Contents
  Jump to Section
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [License](#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)
  
  ---
  ## Description
  * ${readmeData.description}
  
  ---
  ## Installation
  
  * Clone Repository and run application

   ${readmeData.install}

  ---
  ## Usage
  Here are some other details about using this product

  ${readmeData.moreInfo}

  ---
  ## License
  Copyright &copy; ${year}  ${readmeData.title}
  
  This license permits developers to use code within terms and conditions of ${readmeData.license}
  
  ---
  ## Contributing
  We welcome all who use this application to share their thoughts and experiences. 
   Here are some other **guidelines**.
  - Have a look at [source code](https://www.github.com/${readmeData.user}/${readmeData.title}/pulls) changes
  - Feel free to checkout the [issues page](https://www.github.com/${readmeData.user}/${readmeData.title}/issues) for this project
  - ${readmeData.contribute}
  
  ---
  ## Tests
  Here is how to run tests

  ${readmeData.test}

  ---
  ## Questions
  Feel **free** to reach out to <${readmeData.email}> for further information. 
  Check out [Github profile](https://www.github/${readmeData.user})
  
  >"That might be the most important thing to understand about Humans. It's the unknown that defines our existence. We are constantly searching, not just for answers to our questions, but for new questions." - Capt. Benjamin Sisko 
  ---
        `;
    };

    // module.exports = generatePage

    // Exports means, Hey This will get scoped up and read by another entity