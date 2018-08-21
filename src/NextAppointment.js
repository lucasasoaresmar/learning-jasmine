function NextAppointment() {}

NextAppointment.prototype.toDate = function(appointment) {
	const daysToPass = 20;
	const timeToPass = 1000*60*60*24*daysToPass;
	const newDate = new Date(appointment.getDate().getTime() + timeToPass);
	
	const newAppointment = new Appointment(
		appointment.getPacient(),
		appointment.getProcedures(),
		appointment.isPrivative(),
		true,
		newDate
	)

	return newAppointment;
};