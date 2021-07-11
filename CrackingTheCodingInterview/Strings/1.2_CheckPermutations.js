/**
 * Given Two strings, write a method to decide if one is a permutation of the other
 */

const assert = require("assert");

const CheckPermutation_WithMap = (strOne, strTwo) => {
  const strOneLen = strOne.length,
    strTwoLen = strTwo.length;

  if (strOneLen !== strTwoLen) return false;

  const tracker = {};

  for (let i = 0; i < strOneLen; i++) {
    const currLetter = strOne[i];

    if (!tracker[currLetter]) tracker[currLetter] = 1;
    else tracker[currLetter]++;
  }

  for (let j = 0; j < strOneLen; j++) {
    const currLetter = strTwo[j];

    if (tracker[currLetter] === 0) return false;
    else tracker[currLetter]--;
  }

  const sum = Object.values(tracker).reduce(
    (curr, total) => (total += curr),
    0
  );

  return sum > 0 ? false : true;
};

assert.equal(CheckPermutation_WithMap("asdf", "tooLong"), false);
assert.equal(CheckPermutation_WithMap("asdf", "fdas"), true);
assert.equal(CheckPermutation_WithMap("mom", "moo"), false);
assert.equal(CheckPermutation_WithMap("kitty", "yittk"), true);
assert.equal(CheckPermutation_WithMap("god     ", "dog"), false);

const CheckPermutation_Sorting = (strOne, strTwo) => {
  const strOneLen = strOne.length,
    strTwoLen = strTwo.length;

  if (strOneLen !== strTwoLen) return false;

  const strOneSorted = strOne.split("").sort().join(),
    strTwoSorted = strTwo.split("").sort().join();

  return strOneSorted === strTwoSorted ? true : false;
};

assert.equal(CheckPermutation_Sorting("asdf", "tooLong"), false);
assert.equal(CheckPermutation_Sorting("asdf", "fdas"), true);
assert.equal(CheckPermutation_Sorting("mom", "moo"), false);
assert.equal(CheckPermutation_Sorting("kitty", "yittk"), true);
assert.equal(CheckPermutation_Sorting("god     ", "dog"), false);
