const assert = require('assert');
const {Given, When, Then} = require('cucumber');

const {allocate, deallocate} = require('../../src/allocateHandsets.js');

Given('I have {int} handsets available' , startingHandsets => {
	this.startingHandsets = startingHandsets;
})

When('I try to allocate {int} of them', allocationSize=> {
	this.remainingHandsets = allocate(
		this.startingHandsets,
		allocationSize
	);
})

When('I try to deallocate {int}', allocationSize=> {
	this.remainingHandsets = deallocate(
		this.startingHandsets,
		allocationSize
	);
})

Then('I should have {int} handsets left', expectedRemainingHandsets => {
	assert.equal(
		this.remainingHandsets,
		expectedRemainingHandsets
	);
});

