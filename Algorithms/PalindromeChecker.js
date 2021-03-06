const assert = require('assert')
const Stack = require('../DataStructures/Stack')

const PalindromeChecker = (str) => {
  var stack = new Stack()
  strArray = str.toUpperCase().split('')

  strArray.forEach(char => {
    stack.push(char)
  });

  for (let i = 0; i < strArray.length; i++){

    if (stack.pop() !== strArray[i]) {
      break
    }
  }

  return stack.isEmpty()
}

assert.equal(PalindromeChecker('ada'), true)
assert.equal(PalindromeChecker('mom'), true)
assert.equal(PalindromeChecker('pokemon'), false)

