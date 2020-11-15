/**
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return 
the largest word in the string. If there are two or more words that are the same 
length, return the first word from the string with that length. Ignore punctuation 
and assume sen will not be empty.

Examples
Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
 */

function LongestWord(sen) {
  return sen.replace(/[^A-Za-z ]/gi, '').split(' ').sort((a, b) => b.length - a.length)[0];
}