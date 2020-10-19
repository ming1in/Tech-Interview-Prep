/**
 * Customer support for an e-commerce business uses a computerized algorithm for evaluating 
 * if support tickets are still open. Open and closed tickets are represented by different
 * open and close braces respectively. For example, each of the braces '([{' represent an open
 * ticket and need matching braces '}])' in that order to close them
 * 
 * check if an array of string of braces is balanced
 */

const assert = require('assert')

function braces(values) {
  let stack = [] //initialize stack

  let openBraces = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  let closeBraces = {
    '}': true,
    ']': true,
    ')': true
  }

  let results = []
  for (let i = 0; i < values.length; i++) {
    var result = 'YES'
    for (let j = 0; j < values[i].length; j++) {
      let brace = values[i][j]
      // checks if brace are open 
      if (openBraces[brace]) {
        //if open braces add to top of stack
        stack.push(brace)
      } else if (closeBraces[brace]) {
        //if closed braces remove respective top brace
        if (openBraces[stack.pop()] !== brace) {
          //if top of stack does not match its respective brace, then return. falsie
          result = 'NO'
          break
        }
      }
    }
    results.push(result)
  }

  return results

}

assert.equal(braces(['{}[]()', '{[}]}']), ['YES', 'NO'])
