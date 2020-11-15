/*
Min Window Substring:
Have the function MinWindowSubstring(strArr) take the array of strings 
stored in strArr, which will contain only two strings, the first parameter 
being the string N and the second parameter being a string K of some characters, 
and your goal is to determine the smallest substring of N that contains all the 
characters in K. 

For example: 
if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the 
characters a, e, and d is "dae" located at the end of the string. So for this example 
your program should return the string dae.

Another example: 
if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all 
of the characters in K is "aabd" which is located at the beginning of the string. Both 
parameters will be strings ranging in length from 1 to 50 characters and all of K's 
characters will exist somewhere in the string N. Both strings will only contains lowercase 
alphabetic characters.

Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje

Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse

Resources:
- https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/
- https://coderbyte.com/video/min-window-substring-solution
 */

const assert = require('assert')

function MinWindowSubstring(strArr) {
  let str = strArr[0]
  let pattern = strArr[1].split('')

  //iterate through potential windows in string start with smallest window
  //being the length of the given pattern
  for (let i = pattern.length, len = str.length; i < len; i++){
    //iterate through every potential starting point relative to size of window
    for (let j = 0; j <= len - i; j++){
      let substring = str.substr(j, i)

      //check is substring contains all the chars in pattern
      if (isContained(substring)) {
        return substring // if substring contains char in pattern return it
      }
    }
  }
  return 'Not in string'

  function isContained(str) {
    let strArr = str.split('')

    //checks if given substring contains all the char in pattern
    for (let i = 0; i < pattern.length; i++) {
      let idx = strArr.findIndex(char =>  char === pattern[i]) //looks for position of char in substring

      if (idx === -1) {//if substring does not contain char from pattern
        return false
      } else { //if substring contains a char from pattern 
        strArr.splice(idx, 1) //remove letter from substring, so it cant be used again
      }
    }

    return true
  }
}

assert.equal(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]), 'aksfaje')

