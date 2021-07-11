const assert = require("assert");

const PalindromePermutation = (string) => {
  const tracker = {};

  const trimmedString = string.replace(" ", "").toLowerCase(),
    trimmedStringLength = trimmedString.length;

  const isEven = trimmedStringLength % 2 === 0,
    isOdd = trimmedStringLength % 2 === 1;

  for (let i = 0; i < trimmedStringLength; i++) {
    const letter = trimmedString[i];

    if (!tracker[letter]) tracker[letter] = 1;
    else tracker[letter]--;
  }

  const sum = Object.values(tracker).reduce((total, count) => total + count, 0);

  if (isEven && sum === 0) return true;
  if (isOdd && [1, 0].includes(sum)) return true;

  return false;
};

assert.equal(PalindromePermutation("bboho"), true);
assert.equal(PalindromePermutation("bbohho"), true);
assert.equal(PalindromePermutation("bbogho"), false);
assert.equal(PalindromePermutation("Tact Coa"), true);
