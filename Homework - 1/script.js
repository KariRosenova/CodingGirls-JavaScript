/* 1. Write a program, which chooses either rock, paper or scissors randomly 
each time it is run. If you want an extra challenge with that, you can use 
the **prompt()** function to get an input from the user and compare his input 
to what the program chose and display who is the winner. */

const game = ['rock', 'paper', 'scissorrs'];
let show = game[Math.floor(Math.random() * game.length)];
console.log(show);

/* 2. Write a program, which uses the **prompt()** function to get an input 
from the user. We want this input to represent the age of the user, so if
he provides an input with incorrect format, the code should ask him until he
provides a valid option (a number which is more than zero and less than 130).*/


//const input = prompt("Please, set your age");
//do{
//	prompt("ENTER CORRECT AGE");
//} while(input < 0);

/*3. Write a program, which calculates the *area of a circle* (check google 
for the formula). You'll need only the radius as a variable, your choice whether 
you take the radius as an input from the user or hardcode it.*/
const radius = 2;
const circleArea = (Math.PI) * (Math.pow(radius, 2));
console.log(circleArea);
