const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const readmeProject = () => {
return inquirer
    .prompt([
    {
    type:"input",
    name:"title",
    message: "What is the project's title?"    
},
{
    type:"input",
    name:"email",
    message: "What is your e-mail Address?"    
},
{
    type:"input",
    name:"user",
    message: "What is your Github name?"    
},
{
    type:"input",
    name:"description",
    message: "Provide a quick description of the project.."    
},
{
    type:"list",
    name:"license",
    message: "What kind of license would you like?",
    choices:['MIT', 'Zlib', 'ODbL', 'ISC', 'None'],
    default: 'None',
    filter: licenseInput => {
        if(licenseInput === 'None'){
            return 'WTFPL'
        } else {return licenseInput}
    }
},
{
    type:"input",
    name:"install",
    message: "What dependencies need to be installed first?", 
    default:'npm i'   
},
{
    type:"input",
    name:"test",
    message: "What command should be used to test?",    
    default:'npm test'
},
{
    type:"input",
    name:"moreInfo",
    message: "What else does the user need to know about this project and proper usage?"    
},
{
    type:"input",
    name:"contribute",
    message: "What guidelines should users want to send contributions to the project?"    
},
])

}

readmeProject()
    .then(data => {
        const pageMD = generatePage(data);
        fs.writeFile('./readmeSample.md', pageMD, err => {
          if (err) throw new Error (err);
        
          console.log("Success!");
        });
      });
