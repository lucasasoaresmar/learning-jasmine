function PacientBuilder() {
this.name = 'Lucas';
this.age = 28;
this.weight = 85;
this.height = 1.75;
this.date = new Date(2018, 8, 2);
}

PacientBuilder.prototype.construct = function() {
	return new Pacient(this.name, this.age, this.weight, this.height);
};

PacientBuilder.prototype.withAge = function(value) {
	this.age = value;
	return this;
}

PacientBuilder.prototype.withWeight = function(value) {
	this.weight = value;
	return this;
}