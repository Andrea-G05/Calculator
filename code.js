let num1 = "0";
let num2 = "0";
let oper;

let display = document.querySelector(".display p");

document.querySelectorAll("button").forEach( (button)=>
	button.addEventListener("click", () => elaborate(button.dataset.input)));

function elaborate (input) {
	if (input.match(/[0-9]/))
		inputNumber(input)
	else if (input.match(/[\+\-\x\/]/))
		inputOperator(input)
	else switch(input){
		case "=":
			inputEqual();
			break;
		case "C":
			inputClear();
			break;
		case ".":
			inputDot();
			break;
		case "sign":
			inputSign();
			break;
		default:
			prompt("ERROR");
	}
}

function inputNumber(input) {
	input = input.toString();
	if (oper === undefined){
		num1 === "0"?
		num1 = input:
		num1 += input;
		display.textContent = num1;
	} else {
		num2 === "0"?
		num2 = input:
		num2 += input;
		display.textContent = num2;
	}
}

function inputOperator(input) {
	if (oper === undefined){
		oper = input; 
	} else {
		num1 = inputEqual();
		oper = input;
	}
}

function inputEqual() {
	if (oper === undefined)
		return;
	let result;
	switch (oper){
		case "+":
			result = add(num1, num2);
			break;
		case "-":
			result = subtract(num1, num2);
			break;	
		case "x":
			result = multiply(num1, num2);
			break;
		case "/":
			result = divide(num1, num2);
			break;
	}
	display.textContent = result;
	num1 = "0";
	num2 = "0";
	oper = undefined;
	return result;
}

function inputClear() {
	display.textContent = "0";
	num1 = "0";
	num2 = "0";
	oper = undefined;
}

function inputDot() {
	console.log("dot")
}

function inputSign() {
	console.log("sign")
}

function add(a,b) {
	let result = +a + +b;
	return result.toString();
}

function subtract(a,b) {
	let result = +a - +b;
	return result.toString();
}

function multiply(a,b) {
	let result = +a * +b;
	return result.toString();
}

function divide(a,b) {
	let result = +a / +b;
	return result.toString();
}