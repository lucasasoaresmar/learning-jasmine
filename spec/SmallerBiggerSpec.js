describe("SmallerBigger", function() {
	it("should understand non sequential numbers", function() {
		const alg = new SmallerBigger();
		alg.find([1,4,65,130,90]);
		expect(alg.getBigger()).toEqual(130);
		expect(alg.getSmaller()).toEqual(1);
	})

	it("should understand crescent numbers", function() {
		const alg = new SmallerBigger();
		alg.find([1,4,65,90,130]);
		expect(alg.getBigger()).toEqual(130);
		expect(alg.getSmaller()).toEqual(1);
	})

	it("should understand decrescent numbers", function() {
		const alg = new SmallerBigger();
		alg.find([130,90,65,4,1]);
		expect(alg.getBigger()).toEqual(130);
		expect(alg.getSmaller()).toEqual(1);
	})

	it("should be equal to himself", function() {
		const alg = new SmallerBigger();
		alg.find([4]);
		expect(alg.getBigger()).toEqual(4);
		expect(alg.getSmaller()).toEqual(4);
	})
})