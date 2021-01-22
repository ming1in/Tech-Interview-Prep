function minOperations(nums: number[], x: number): number {
  const numsLength = nums.length
  const result = -Infinity

  let leftSum = 0
  let leftRemainders= {x: -1}

  // check values from left to right
  for (let i = 0; i < numsLength; i++){
    leftSum += nums[i]

    if (leftSum > x) {
      break
    }

    leftRemainders[x-leftSum] = i
  }

  

  console.log(leftRemainders)
  return -1
};


minOperations([1,1,4,2,3], 5)