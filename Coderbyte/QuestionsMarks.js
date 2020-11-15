/**
Questions Marks
Have the function QuestionsMarks(str) take the str string parameter, which will 
contain single digit numbers, letters, and question marks, and check if there are 
exactly 3 question marks between every pair of two numbers that add up to 10. If so, 
then your program should return the string true, otherwise it should return the 
string false. If there aren't any two numbers that add up to 10 in the string, then 
your program should return false as well.

For example: 
if str is "arrb6???4xxbl5???eee5" then your program should return true because there 
are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at 
the end of the string.

Examples
Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true
 */

const assert = require('assert')
 
function QuestionsMarks(str) {
  var parsedStr = str.replace(/[a-z]/gi, '') //remove unneeded letters

  var result = false;
  for (let i = 0; i < parsedStr.length; i++) {
    for (let j = i + 1; j < parsedStr.length; j++) {
      if (Number(parsedStr[i]) + Number(parsedStr[j]) === 10) {
        result = true;
        console.log(parsedStr.slice(i,j).split('?'))
        if (parsedStr.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return result;

}

assert.equal(QuestionsMarks('arrb6???4xxbl5???eee5'), true)
assert.equal(QuestionsMarks('aa6?9'), false)