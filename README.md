# cucumber-js-test

This is a bare minimum setup to demonstrate testing with Cucumber for Javascript.

It has been set up with a single source code file in `src/` which wraps 
Javascript's builtin `Array.indexOf()` method along with a simple test
implemented with a single feature file and script file stored in `features/`.

## Cloning the repo and running the test

Clone the repo by running
`git clone git@github.com:ChrisRimmer/cucumber-js-test.git`

Run the tests from inside the repo:
`cd cucumber-js-test; npm test`

## Info about `npm test`

`npm test` used above isn't magic - it's user-configurable. In this repo, it has
been set to run `cucumber-js` - this is visible in `package.json` in the project
root.

Unless configured otherwise, cucumber follows some very simple rules.

It will search in `features/` for any files matching the pattern `**/*.feature`
which means it searches recursively through subdirectories for files whose names
end with `.feature`.

So that it can actually run the tests, Cucumber also uses step definitions,
which it finds by doing a similar recursive search in `features/` for any files
matching `**/*.js`.

The test suite won't pass unless all features have valid step definitions, as
any features which are missing a matching step definition will cause the test
suite to fail with a message describing what step definitions need to be added.
