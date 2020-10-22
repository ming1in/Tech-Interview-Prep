/**
 * https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 */


function processData(input) {
  const queue = []
  const stack = []

  input = input.split('\n')
  var idx = 1

  while (idx < input.length) {
    if (input[idx][0] === '1') {
      // add next element
      var element = input[idx].split(' ')[1]
      queue.push(element)
      stack.push(element)
      idx++
    } else if (input[idx] === '2') {
      queue.shift()
      stack.pop()
      idx++
    } else if (input[idx] === '3') {
      //print index at front
      console.log(queue[0])
      idx++
    }

  }
} 