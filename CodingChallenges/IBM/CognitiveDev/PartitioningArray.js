function partitionArray(k, numbers) {
  // Write your code here
  var visited = []
  var iterations = Math.floor(numbers.length / k) * k

  console.log(`k: ${k}`)
  console.log(`length: ${numbers.length}`)
  console.log(`iterations: ${iterations}`)
  console.log('numbers')

  for (let i = 0; i < iterations; i++) {
    //check if subsequence has duplicates
    console.log(numbers[i])
    if (visited.includes(numbers[i])) {
      return 'No'
    }
    if ((i + 1) % k === 0) {
      visited = []
    } else {
      visited.push(numbers[i])
    }
  }

  if (iterations < numbers.length) {
    for (let i = iterations; i < numbers.length; i++) {
      if (visited.includes(numbers[i])) {
        return 'No'
      } else {
        visited.push(numbers[i])
      }
    }
  }

  if (numbers.length % k !== 0) {
    return 'No'
  }

  return 'Yes'
}