function canFormArray(arr: number[], pieces: number[][]): boolean {

  var i = 0

  while (i < arr.length) {
    const num = arr[i]
    const piece = pieces.filter(piece => piece[0] === num)
    var result = true

    //a piece starting with num does not exist
    if (piece.length === 0) {
      return false
    }

    if (piece[0].length > 1) {
      const pieceFromArr = arr.slice(i, i + piece[0].length)

      pieceFromArr.forEach((el, idx) => {
        if (el !== piece[0][idx]) {
          result = false
        }
      })
        
    } else {
      if (piece[0][0] !== num) {
        result = false
      }
    }

    i += piece[0].length
  }

  return result
};

console.log(canFormArray([85], [[85]]) === true)
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]) === true)
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]) === false)
console.log(canFormArray([85,1,2], [[85,2,1]]) === false)

