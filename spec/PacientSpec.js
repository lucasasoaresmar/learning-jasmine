describe('Pacient', function() {
	it('Should calculate imc', function() {
		const me = new Pacient('Lucas',28,85,1.75);
		const imc = me.imc();
		expect(me.imc()).toEqual(85/Math.pow(1.75,2));
	})
})