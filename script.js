window.onload = function() {

var numValue = parseInt(prompt("Let's play FizzBuzz. \nEnter a number between 1 and 100"));

// alert(typeof(numValue));


function getNum() {

// numValue = parseInt(prompt("please enter a whole number between 1 and 100"));

		if (isNaN(numValue)) {
			getNum();
		} else {
			fizzBuzz();
		};
		
	}; //getNum end
	
// var test = 99;

function fizzBuzz () {


			for (var i = 1; i < numValue + 1; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				// console.log("fizzbuzz");
				
				var para = document.createElement("p"); //creates a <p> tag
				var node = document.createTextNode("fizzbuzz"); //creates node to add text to
				para.appendChild(node); //add node to p element
				var div = document.getElementById("container"); 
				div.appendChild(para); //adds <p> to div
			} 
			else if (i % 3 === 0) {
				// console.log("fizz");
				
				var para = document.createElement("p"); //creates a <p> tag
				var node = document.createTextNode("fizz");
				para.appendChild(node);
				var div = document.getElementById("container");
				div.appendChild(para);
				} 

			else if (i % 5 === 0) {
				// console.log('buzz');
				
				var para = document.createElement("p"); //creates a <p> tag
				var node = document.createTextNode("buzz");
				para.appendChild(node);
				var div = document.getElementById("container");
				div.appendChild(para);
				} else {
					// console.log(i);
				
				var para = document.createElement("p"); //creates a <p> tag	
				var node = document.createTextNode(i);
				para.appendChild(node);
				var div = document.getElementById("container");
				div.appendChild(para);
				};
			}; //for loop end


}; //fizzBuzz end
fizzBuzz();

}; //onload end
