// function twoSum(nums: number[], target: number): number[] {
//   const numLength = nums.length

//   for (let i = 0; i < numLength; i++){
//     for (let j = 1; j < numLength; j++){
//       if (nums[j] === target - nums[i]) {
//         return [i,j]
//       }
//     }
//   }
// };

// function twoSum(nums: number[], target: number): number[] {
//   const obj = {}

//   const numsLength = nums.length

//   nums.forEach((num, idx) => {
//     obj[num] = idx
//   })

//   for (let i = 0; i < numsLength; i++){
//     const complement = target - nums[i]

//     console.log(complement)

//     if (obj[complement] && obj[complement] !== i) {
//       return [i, obj[complement]]
//     }
//   }
// };

function twoSum(nums: number[], target: number): number[] {
  const obj = {}

  const numsLength = nums.length

  for (let i = 0; i < numsLength; i++){
    const num = nums[i]
    const complement = target - num

    console.log(obj[complement])

    if (obj[complement] !== undefined) {
      return [i, obj[complement]]
    }

    obj[num] = i
  }
};

console.log(twoSum([1, 3, 4, 2], 6))
console.log(twoSum([2, 7, 11, 15], 9))




