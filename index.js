var chalk = require("chalk");

var message = chalk.bgRed.blue("Hello ") + chalk.green.bold("World");
var message2 = chalk.bgBlue.cyan("if you can read this you\'re wasting your time")
console.log(message);
console.log(message2);
