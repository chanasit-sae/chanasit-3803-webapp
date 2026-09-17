import inquirer from 'inquirer';

const args = process.argv.slice(2);

if (args.length < 2 || isNaN(args[0]) || isNaN(args[1])) {
  console.log('Please enter two numbers');
  process.exit();
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'operator',
      message: 'add | subtract',
    },
  ])
  .then((answers) => {
    const operator = answers.operator;
    if (operator === 'add') {
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === 'subtract') {
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else {
      console.log('Unknown operator');
    }
  });
