function Appointment(pacient, procedures, privative, returned, date) {
	this.pacient = pacient;
	this.procedures = procedures;
	this.privative = privative;
	this.returned = returned;
	this.date = date;
};

Appointment.prototype.price = function() {
	let money = 0;

	if (this.returned) return 0;

	this.procedures.map(procedure => {
		switch(procedure) {
			case 'raio-x':
				money += 55;
				break;
			case 'gesso':
				money += 30;
				break;
			default:
				money += 20;	
		}
	})

	if(this.privative) money *= 2;

	return money;
}

Appointment.prototype.getPacient = function() {
	return this.pacient;
};

Appointment.prototype.getProcedures = function() {
	return this.procedures;
};

Appointment.prototype.isPrivative = function() {
	return this.privative;
};

Appointment.prototype.isReturned = function() {
	return this.returned;
};

Appointment.prototype.getDate = function() {
	return this.date;
};