/**
 *	Object literal
 *	
 *
 */

var persoon = {
	name: 'Bob',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
	
	walk: function () {
		console.log('I am walking');
		
	}
	
	eat: function () {
		console.log('Just keep walking');
		
	}
}

persoon.walk();
