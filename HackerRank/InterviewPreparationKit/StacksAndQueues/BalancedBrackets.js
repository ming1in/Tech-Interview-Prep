/**
 * https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 */

const assert = require('assert')

const balancedBracket = (s) => {
  var stack = []
  const openBrackets = ['{','[','(']
  const closedBrackets = {
    ')':'(',
    ']': '[',
    '}': '{'
  }
  
  for (let i = 0; i < s.length; i++){
    if (openBrackets.includes(s[i])) {
      stack.push(s[i])
    } else if (stack[stack.length - 1] == closedBrackets[s[i]]) {
      stack.pop()
    } else {
      return 'NO'
    }
  }

  if (stack.length > 0) {
    return 'NO'
  }

  return 'YES'
}

assert.equal(balancedBracket('{[()]}'), 'YES')
assert.equal(balancedBracket('{[(])}'), 'NO')
assert.equal(balancedBracket('{{[[(())]]}}'), 'YES')
