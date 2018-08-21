function Pacient(name, age, weight, height) {
	this.name = name;
	this.age = age;
	this.weight = weight;
	this.height = height;
};

Pacient.prototype.print = function() {
	alert(`Meu nome é ${this.name}`)
};

Pacient.prototype.beats = function() {
	return this.age*365*24*60*80;
}

Pacient.prototype.imc = function() {
	const imc = this.weight/Math.pow(this.height,2);
	return imc;
}