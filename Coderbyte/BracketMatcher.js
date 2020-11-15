/**
 Bracket Matcher
Have the function BracketMatcher(str) take the str parameter being passed and 
return 1 if the brackets are correctly matched and each one is accounted for. 
Otherwise return 0. 

For example: 
if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" 
the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" 
will be used as brackets. If str contains no brackets return 1.

Examples
Input: "(coder)(byte))"
Output: 0
Input: "(c(oder)) b(yte)"
Output: 1
 */

 const assert = require('assert')

function BracketMatcher(str) {
  var stack = []

  for (let i = 0; i < str.length; i++){
    var char = str[i]

    if (!(char == '(' || char === ')')){
      continue
    } 

    if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (stack.length === 0) {
        return 0
      } else {
        stack.pop()
      }
    }
  }

  if (stack.length > 0) {
    return 0
  } else {
    return 1
  }
}

assert.equal(BracketMatcher("(coder)(byte))"), 0)
assert.equal(BracketMatcher("(c(oder)) b(yte)"), 1)

