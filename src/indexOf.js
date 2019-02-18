// Toy script that makes a little fake wrapper around the builtin 
//   Array.indexOf() method for us to test on

const ourIndexOf = (needle, haystack) => haystack.indexOf(needle);

module.exports.ourIndexOf = ourIndexOf;
