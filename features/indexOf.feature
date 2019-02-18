Feature: Where is this value in an array?
	Everybody wants to be able to find indexes of values in arrays

	Scenario: The value is in the array
		Given I have an array with 1 at index 0
		When I try to get the index of the value 1
		Then I should be told it is at index 0
