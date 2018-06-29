#!/usr/bin/env node

const program = require('commander')
const {prompt} = require('inquirer')
const {
  initialisePackage
} = require('./index')


program
  .version('1.0.0')
  .description('Client Management System')


// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'App name'
  },
  {
    type: 'input',
    name: 'version',
    message: 'App version'
  },
  {
    type: 'input',
    name: 'main',
    message: 'Root file'
  },
  {
    type: 'input',
    name: 'author',
    message: 'App Author'
  },  
  {
    type: 'input',
    name: 'license',
    message: 'App license'
  },  
]



// Add Command
program
  .command('init')
  .alias('a=i')
  .description('Initialise package.json')
  .action(() => {
    prompt(questions)
      .then(answers => initialisePackage(answers))
  })


program.parse(process.argv)

