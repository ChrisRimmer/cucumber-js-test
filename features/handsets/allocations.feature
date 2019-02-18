Feature: Allocating handsets
	The inventory handler needs to track how many handsets are available

	Scenario: We have handsets available, and allocate some
		Given I have 10 handsets available
		When I try to allocate 3 of them
		Then I should have 7 handsets left

	Scenario: We have handsets available, and deallocate some
		Given I have 2 handsets available
		When I try to deallocate 4
		Then I should have 6 handsets left
