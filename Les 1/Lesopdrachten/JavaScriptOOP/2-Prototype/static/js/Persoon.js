/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

function Persoon(name) {
	this.name = name;
}

Persoon.prototype.speak = function () {
	console.log('Hi, my name is ' + this.name);
};

Persoon.prototype.walk = function () {
	console.log('I am walking');
};

Persoon.prototype.eat = function () {
	console.log('I am eating');
};

var bob = new Persoon('Bob');


bob.speak();
bob.walk();
bob.eat();
