describe('Appointment', function(){	
	let me;

	beforeEach(function() {
		me = new PacientBuilder().withAge(30).construct();
	})
	
	it('Should return 0 price', function() {
		const aptm = new Appointment(me,['raio-x', 'gesso', 'sangue'], true, true);
		const preco = aptm.price();
		expect(preco).toEqual(0); 
	})
	
	describe('Appointment with procedures', function() {
		it('Should return final appointment price', function() {
			const aptm = new Appointment(me,['raio-x', 'gesso', 'sangue'], true, false);
			const preco = aptm.price();
			expect(preco).toEqual((55+30+20)*2);
		})
		
		it('Should return 0 for every commom procedure', function() {
			const aptm = new Appointment(me,['sangue'], false, false);
			const preco = aptm.price();
			expect(preco).toEqual(20);
		})
	})
})