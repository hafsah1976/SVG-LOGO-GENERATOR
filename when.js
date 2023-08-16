const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is your password?',
      when: (answers) => {
          return answers.username === 'admin';
      },
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.error(error);
  });
  
  
//In this example, we're using the `when` 
//clause to conditionally prompt the user for a password only if they enter the correct username. If the username is not "admin", the password prompt will be skipped.
//Note that the `when` clause is a function that receives the `answers` object as a parameter. This object contains the user's answers to all previous prompts. In this case, the `username` answer is checked to see if it matches the expected value. If it does, the password prompt will be displayed. 
//If it doesn't, the password prompt will be skipped.