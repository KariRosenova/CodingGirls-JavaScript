/* 1. **(Task \#1)** Write a JavaScript program to calculate the factorial
of a number.
In mathematics, the factorial of a non-negative 
integer n, denoted by n!, is the product of all positive 
integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120. */

/*
const number = prompt("Please, enter a number to calculate its factorial.")
function factorial(number) {
	
  if (number < 0) 
        return -1;
  else if (number == 0) 
      return 1;
  else {
      return (number * factorial(number - 1));
  }
}
console.log(factorial(number));
*/

/* 2. **(Task \#8)** Write a JavaScript program to find the most frequent item 
of an array. Sample array: 
**const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]**; 
Sample Output: **a ( 5 times )** */
let item;
let counter = 0;
let string = "";
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arr2 = new Array(arr1.length);

	for (var i = 0; i < arr1.length; i++) {
		arr1[i] = item;
		for (var j = i; j < arr1.length; j++) {
			if(arr1[j] == item){
				counter++;
				continue;
			}
			else{
				continue;
			}
		string = item + " is " + counter;
		arr2[i] = string;
		}

	}





/* 3. **(Task \#9)** Write a JavaScript program to find the armstrong 
numbers of 3 digits. Note: An Armstrong number of three digits 
is an integer such that the sum of the cubes of its digits is 
equal to the number itself. For example, **371** is an 
Armstrong number since **3\*\*3 + 7\*\*3 + 1\*\*3 = 371**. 
Search for those numbers from 100 to 999 inclusive. */

/* 4. **(Task \#10)** Write a JavaScript program to construct 
the following pattern, using a nested for loop. Output should 
iffer depending on user input (if function is called with 
**5** as a parameter, do **5** lines)
*  
* *  
* * *  
* * * *  
* * * * *  */

const star = prompt("Enter a number");
	for(i = 0; i <= star; i++){
		
	}

