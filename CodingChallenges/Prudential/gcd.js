
const assert = require('assert').strict

function gcd(num1, num2) {

  if (num1 === 0) {
  return num2
  }
  
  while (num2 != 0) {

    console.log(num1)
    console.log(num2)

    if (num1 > num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
  }
  return num1
}

assert.strictEqual(gcd(54, 24), 6)
// assert.equal(gcd(18, 84), 6)

