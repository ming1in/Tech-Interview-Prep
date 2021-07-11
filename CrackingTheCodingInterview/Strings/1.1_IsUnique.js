/*
 Implement an algorithm to determine if a string has a all unique characters. 
 What if you cannot use additional data structure
*/

const assert = require("assert");

const IsUnique_Brute = (s) => {
  const slen = s.length;

  for (let i = 0; i < slen; i++) {
    const currLetter = s[i];
    console.log(currLetter);

    for (let j = i + 1; j < slen; j++) {
      const compLetter = s[j];
      if (currLetter === compLetter) return false;
    }
  }

  return true;
};

const IsUnique_WithSet = (s) => {
  const strSet = new Set(s.replace(" ", "").split(""));

  if (strSet.size === s.length) return true;
  return false;
};

const IsUnique_Ascii = (s) => {
  const slen = s.length;

  if (slen > 128) return false; // 128 is the max number of unique characters in the alphabet

  const asciiTracker = new Array(128).fill(false);

  for (let i = 0; i < slen; i++) {
    const currentLetterAscii = s.charCodeAt(i);

    if (asciiTracker[currentLetterAscii]) return false;
    else asciiTracker[currentLetterAscii] = true;
  }

  return true;
};

assert.strictEqual(IsUnique_Brute("abc"), true);
assert.strictEqual(IsUnique_Brute("bibble"), false);
assert.strictEqual(IsUnique_Brute("jimmy"), false);
assert.strictEqual(IsUnique_Brute("gon"), true);

assert.strictEqual(IsUnique_WithSet("abc"), true);
assert.strictEqual(IsUnique_WithSet("bibble"), false);
assert.strictEqual(IsUnique_WithSet("jimmy"), false);
assert.strictEqual(IsUnique_WithSet("gon"), true);

assert.strictEqual(IsUnique_Ascii("abc"), true);
assert.strictEqual(IsUnique_Ascii("bibble"), false);
assert.strictEqual(IsUnique_Ascii("jimmy"), false);
assert.strictEqual(IsUnique_Ascii("gon"), true);
