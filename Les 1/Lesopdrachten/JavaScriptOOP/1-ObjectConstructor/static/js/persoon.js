/**
 *	Object constructor with argument, property & method
 *	
 *  var, this, comment, console (log, command line)
 */


function Persoon(name) { 
	this.name = name;
	
	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

	// console.log("This issss: " + this.constructor);
}

var bob = new Persoon('Bob');



bob.speak();
