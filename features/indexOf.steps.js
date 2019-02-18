const assert = require('assert');
const {Given, When, Then} = require('cucumber');

const {ourIndexOf} = require('../src/indexOf.js');

Given('I have an array with {int} at index {int}', (value, index) => {
	this.testArray = [];
	this.testArray[index] = value;
})

When('I try to get the index of the value {int}', value => {
	this.result = ourIndexOf(value, this.testArray)
})

Then('I should be told it is at index {int}', expected => {
	assert.equal(this.result, expected);
});
