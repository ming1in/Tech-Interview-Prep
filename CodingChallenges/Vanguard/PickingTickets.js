const isUnbroken = (array) => {
  for (let i = 0; i < array.length - 1; i++){
    const absDiff = Math.abs(array[i + 1] - array[i])
    
    if (!(absDiff === 0 || absDiff === 1)) {
      return false
    } 
  }

  return true
}

console.log(isUnbroken([4, 4, 5]) === true)
console.log(isUnbroken([8, 8]) === true)
console.log(isUnbroken([13]) === true)

console.log(isUnbroken([2, 3, 4, 13]) === false)
console.log(isUnbroken([87219006, 87219007, 87219008, 87219009]) === true)




