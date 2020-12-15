function maxValue(n, rounds) {
  // //brute for approach
  var investments = new Array(n).fill(0)

  for (const idx in rounds) {
    const round = rounds[idx]

    const contribution = round[2]
    for (let left = round[0] - 1; left < round[1]; left++) {
      investments[left] += contribution
    }
  }

  var max = investments.reduce((a, b) => { return Math.max(a, b) })

  return max

  //efficient approach: use map to store range of increases as contributions are added

  // var investments = {}

  // for(const idx in rounds){
  //     const round = rounds[idx]
  //     const left = round[0]
  //     const right = round[1] +1
  //     const contribution = round[2]

  //     if(investments[left]){
  //         investments[left] += contribution
  //     } else{ 
  //         investments[left] = contribution
  //     }

  //     if(investments[right]){
  //         investments[right] -= contribution
  //     } else{ 
  //         investments[right] = - contribution
  //         }   
  // }
  // console.log(investments)
  // var max = 0

  // Object.entries(investments).map(investmentArr => {
  //     const investment = investmentArr[1]

  //     if(investment > 0){
  //         max += investment
  //     }
  // })

  // return max
}