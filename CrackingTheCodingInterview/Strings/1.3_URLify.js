/**
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end
 * to hold the additional characters, and that you are given the "true"
 * length of the string.
 */

const assert = require("assert");

const URLify = (str) => str.trim().split(" ").join("%20");

assert.equal(URLify("Mr John Smith     "), "Mr%20John%20Smith");
