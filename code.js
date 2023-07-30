let num1 = 0;
let num2 = 0;
let oper;

document.querySelectorAll("button").forEach( (button)=>
	button.addEventListener("click", () => elaborate(button.dataset.input)));


	function elaborate (input){
	if(input.match(/[0-9]/))
		inputNumber(input)
	else if(input.match(/[\+\-\x\/]/))
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

function inputNumber(num){
	console.log("num")
}

function inputOperator(oper){
	console.log("oper")
}

function inputEqual(){
	console.log("equal")
}

function inputClear(){
	console.log("clear")
}

function inputDot(){
	console.log("dot")
}

function inputSign(){
	console.log("sign")
}