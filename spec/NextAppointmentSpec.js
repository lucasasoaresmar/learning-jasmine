describe('NextAppointment', function(){	
	let me;

	beforeEach(function() {
		me = new PacientBuilder().withAge(30).construct();
	})
	
	it('Should make the appointment 20 days later', function() {
		const aptm = new Appointment (
			me,
			['raio-x', 'gesso', 'sangue'], 
			false, 
			false, 
			new Date(2018, 8, 2)
		)
		const nextAptm = new NextAppointment().toDate(aptm);
		expect(nextAptm.getDate().toString()).toEqual(new Date(2018, 8, 22).toString());
	})
})