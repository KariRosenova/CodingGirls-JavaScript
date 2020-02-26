$(document).ready(function() {
  let num1 = 0;
  let num2 = 0;
  let number;
  let i = 0;
  let operator = '';
  let result = 0;

 // $('#result').text(0);
  
  $('button').click(function() {
    let buttonPressed = $(this).html();
   
   //$('#result').text(buttonPressed);
   

    if (buttonPressed >= '0' && buttonPressed <= '9') {
      if (i == 0) {
        if(num1 != '0'){
            number = '' + num1 + buttonPressed;
        }
        else{
          number = buttonPressed;
        }
      }else{
        if(num2 != '0'){
            number = '' + num2 + buttonPressed;
        }
        else{
          number = buttonPressed;
        }
      }
      handleNumber(number);
    }
    else if (buttonPressed === 'Clear') {
    	clear();
    }
    else if (buttonPressed === '=') {
      	result = handleResult(num1, num2, operator);
      	operator = null;
    }
    else {
    	handleOperator(buttonPressed);

    }
    console.log(buttonPressed);
});

function handleNumber(num) {
    if (i == 0) {
      num1 = Number(num);
    }else{
      num2 = Number(num);
    }
  	displayButton(num);
}


function handleOperator(oper) {
  operator = oper;
  i = 1;
	displayButton(oper);
}


function handleResult(num1, num2, operator){
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
    }
    displayButton(Number(result));
}

function displayButton(btn) {
    $('#result').text(btn);
} 

function clear() {
  $("#result").empty();
  num1 = 0;
  num2 = 0;
  i = 0;
  operator = '';
  result = 0;
}
});
