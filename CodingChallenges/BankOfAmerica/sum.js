/*
For each line of input, print to standard output the sum of the integers 
from 1 through n, disregarding those divisible by 5 and 7. Print out 
each result on a new line.
 */
function sum(n) {

  var sum = 0

  for (let i = 1; i <= n; i++){
    if (i % 5 != 0 && i % 7 != 0){
      console.log(i)
      sum += i
    }
  }
  console.log(sum)

  return sum
}

// sum(7) //16
sum(19) //139

