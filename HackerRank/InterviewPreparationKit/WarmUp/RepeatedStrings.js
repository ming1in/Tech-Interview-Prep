/**
 * https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
const assert = require('assert')

/**
 * this approach increments the counter for number of A's by 1 
 */
// function repeatedString(s, n) {
//   var repeatString = s
//   var numOfA = 0

  
//   while (repeatString.length < n) {
//     repeatString += s
//   }

//   for (let i = 0; i < n; i++){
//     if (repeatString[i] === 'a') {
//       numOfA++
//     }
//   }

//   return numOfA
// }

/**
 * @description this approach increments the counter for number of A's by the number of A's
 * in string s. Then iterating through the remain characters.
 */
// function repeatedString(s, n) {
//   var aInString = (s.match(/a/g)).length
//   var numOfChar = n - s.length
//   var aInRepeatString = (s.match(/a/g)).length
//   var repeatString = s

//   while (repeatString.length + s.length < n) {
//     numOfChar -= s.length
//     repeatString += s
//     aInRepeatString += aInString
//   }

//   for (let i = 0; i < numOfChar; i++){
//     if (s[i] === 'a') {
//       aInRepeatString++
//     }
//   }

//   return aInRepeatString
// }
 
/**
 * @description this is the most efficient approach that multiplies the number of A's in `s` by number of 
 * times `s` needs to be repeated. Then, adding on any remain A's from `rest` amount of characters in `s`
 */
function repeatedString(s, n) {
  const as = s.split("").filter(c => c === "a").length; // # of A's in string s
  console.log(as)
  const times = parseInt(n / s.length); //number of times s should be repeated
  console.log(times)
  const rest = n % s.length; //remaining # of char needed after s has been repeated

  const totalAs = times * as
    + s.slice(0, rest).split("").filter(c => c === "a").length

  return totalAs; 
}


assert.equal(repeatedString('ada', 10), 7)
// assert.equal(repeatedString('a', 1000000000000), 1000000000000)