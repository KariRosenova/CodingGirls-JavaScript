$(document).ready(function() {
  let num1 = '';
  let num2 = '';
  let operator = '';
  let result = 0;

  $('#result').text(0);
  
  $('button').click(function() {
    let buttonPressed = $(this).html();
   
   //$('#result').text(buttonPressed);
   

    if (buttonPressed >= '0' && buttonPressed <= '9') {
    	handleNumber(buttonPressed);
    }
    else if (buttonPressed === 'Clear') {
    	clear();
    }
    else if (buttonPressed === '=') {
      	num2 = handleTotal(num1, num2, operator);
      	operator = null;
    }
    else {
    	handleOperator(buttonPressed);
    }
    console.log(buttonPressed);
});

function handleNumber(num) {
  	if (num1 === '') {
   		num1 = num; 
	}
    else {
    	num2 = num;
    }
  	displayButton(num);
}


function handleOperator(oper) {
	if (operator === '') {
		operator = oper;
	}
	else {
		handleTotal();
		operator = oper;
	}
	displayButton(oper);
}

function handleTotal() {
    switch (operator) {
        case '+':
            result = Number(num1) + Number(num2);
            displayButton(result);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            displayButton(result);
            break;
        case '/':
            result =  Number(num1) / Number(num2);
            displayButton(result);
            break;
        case 'x':
            result =  Number(num1) * Number(num2);
            displayButton(result);
            break;
    }
    updateVariables();
}

function displayButton(btn) {
    $('#result').text(btn);
} 

function clear() {
	$("#result").empty();
	num1 = '';
    num2 = '';
    operator = '';
    result = 0;
}

function updateVariables() {
	num1 = result;
	num2 = '';
}

});