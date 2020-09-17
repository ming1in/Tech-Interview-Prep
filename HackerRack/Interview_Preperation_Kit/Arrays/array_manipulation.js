/*
https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*/

const { Console } = require('console');

const assert = require('assert').strict

const array_manipulation = (n, queries) => { //time = O(N^2) | space = O(n), n is the length given

  //initial array of zeros with length n
  const arr = new Array(n).fill(0)

  queries.forEach(query => {
    const start = query[0] - 1
    const end = query[1]
    const value = query[2]

    for (var i = start; i < end; i++){
      arr[i] += value
    }

  });

  return Math.max(...arr)
}

const array_manipulation_2 = (n, queries) => { //time:O(n+m), m = # of queries | space:0(n)
  const arr = new Array(n).fill(0)

  //track the rate of change in terms of where the rate starts to increase and where it stopped increasing
  queries.forEach(query => {
    const start = query[0] -1
    const end = query[1]
    const value = query[2]

    arr[start] += value
    arr[end] -= value
  })

  var sum = 0
  var max = 0
  //max is the greatest accumulated slope starting from index 0
  for (var i = 0; i < n; i++) {
    sum += arr[i]
    max = Math.max(max, sum)
  }

  return max
}


assert(array_manipulation_2(5, [[1,2,100], [2,5,100], [3,4,100]]), 200)