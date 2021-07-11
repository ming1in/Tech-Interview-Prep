
/**
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace
 * a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 * 
 * inserting -> next word has one EXTRA letter than previous word
 * removing -> next word has one LESS letter than previous word
 * replacing -> two extra letters, one from each word, but in the same index
 * */

const assert = require("assert");

function getTracker(string) {
  const tracker = {}

  string.split('').forEach(letter => {
    if (!tracker[letter]) tracker[letter] = 1
    else tracker[letter] -= 1
  });

  return tracker
}

function OneAway(prevString, nextString) {
  const prevTracker = getTracker(prevString)
  const nextTracker = getTracker(nextString)

  


}


assert.equal(OneAway('pale', 'ple'), true) // removing
// assert.equal(OneAway("pales", "pale"), true); //inserting
// assert.equal(OneAway("pale", "bale"), true); // replacing p with b in index 0
// assert.equal(OneAway("pale", "bake"), false); 