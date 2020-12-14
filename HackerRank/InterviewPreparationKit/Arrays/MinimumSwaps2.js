/*
https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

Resources: 
https://stackoverflow.com/questions/55210162/minimum-number-of-swaps-to-sort-an-array
https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
*/

const assert = require('assert').strict

function minimumSwaps(arr) {
  
  var graph = [] //[[value: int, key: int]]
  var visitedNodes = [] //[bool]
  var swaps = 0
  
  // populate the graph with key-value pairs, and 
  // set visitedNodes array of false
  for(let i = 0; i < arr.length; i++){
    graph[i] = []; 
    graph[i].value = arr[i];
    graph[i].key = i;
    visitedNodes[i] = false;
  }

  console.log(graph)

  //sort nodes by value in ascending ordering
  graph.sort(function (a, b) {
    return a.value - b.value;
  })

  for (let i = 0; i < arr.length; i++){
    //checks if key is already in correct index or has been visted before
    if (graph[i].key === i || visitedNodes[i]) { 
      continue
    }

    var edges = 0
    var j = i

    while (!visitedNodes[j]) {
      visitedNodes[j] = true //mark node as visited
      j = graph[j].key //move to next node
      edges += 1
    }
    
    if (edges > 0) {
      swaps += (edges > 1) ? edges - 1 : edges
    }
  }

  return swaps
}

assert.equal(minimumSwaps([4, 3, 1, 2]), 3)
assert.equal(minimumSwaps([1, 3, 5, 2, 4, 6, 7]), 3)
assert.equal(minimumSwaps([2, 3, 4, 1, 5]), 3)

