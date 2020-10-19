/**
 * https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen
 */

const assert = require('assert')

function luckBalance(k, contests) {

  var importantContest = []
  var luck = 0

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 1) {
      importantContest.push(contests[i][0])
    } else {
      luck = luck + contests[i][0]
    }
  }

  importantContest = importantContest.sort()
  console.log(importantContest)
  //needs to win
  var winContest = importantContest.length - k

  for (let i = 0; i < importantContest.length; i++) {
    if (i < winContest) {
      console.log("luck dc: " + importantContest[i])
      luck -= importantContest[i]
    }
    else {
      luck += importantContest[i]
    }
  }

  return luck
}

assert.equal(luckBalance(8))

