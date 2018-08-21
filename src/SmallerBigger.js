function SmallerBigger() {
};

SmallerBigger.prototype.find = function(nums) {
	this.smaller = Number.MAX_VALUE;
	this.bigger = Number.MIN_VALUE;
	
	nums.map(num => {
		if(num < this.smaller) this.smaller = num;
		if(num > this.bigger) this.bigger = num;
	})

};

SmallerBigger.prototype.getSmaller = function() {
	return this.smaller
};

SmallerBigger.prototype.getBigger =  function() {
	return this.bigger
};
