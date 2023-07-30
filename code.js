function calculate(input){
	console.log(input);
}



document.querySelectorAll("button").forEach( (button)=>
	button.addEventListener("click", () => calculate(button.dataset.input)))
