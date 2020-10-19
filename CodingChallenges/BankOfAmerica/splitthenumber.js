/**
 Programming challenge description:
You are given a number N and a pattern. The pattern consists of lowercase latin 
letters and one operation "+" or "-". The challenge is to split the number and 
evaluate it according to this pattern e.g.
1232 ab+cd -> a:1, b:2, c:3, d:2 -> 12+32 -> 44

Input:
Your program should read lines from standard input. Each line contains the 
number and the pattern separated by a single whitespace. The number will be in 
range [100, 1000000000]. All test cases contain valid expressions (no leading zeros).

Output:
Print out the result of the pattern evaluation.
 */



function splitTheNumber(string) {
  var stringSplit = string.split(' ')
  var number = stringSplit[0]
  var pattern1
  var pattern2
  var operation
  var result

  if (stringSplit[1].includes('-')) {
    pattern = stringSplit[1].split('-')
    pattern1 = parseInt(number.slice(0, pattern[0].length))
    pattern2 = parseInt(number.slice(pattern[0].length, number.length))
    operation = '-'
  } else {
    pattern = stringSplit[1].split('+')
    pattern1 = parseInt(number.slice(0, pattern[0].length))
    pattern2 = parseInt(number.slice(pattern[0].length, number.length))
    operation = '+'
  } 

  if (operation === '-') {
    result = pattern1 - pattern2
  } else {
    result = pattern1 + pattern2

  }

  console.log(result)
  return result
}
 
splitTheNumber('3413289830 a-bcdefghij') //-413289827
