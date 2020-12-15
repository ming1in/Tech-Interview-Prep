function commonSubstringUtil(string1, string2) {
  var letterCount = {} //{[letter: string]: bool}

  //iterate through string1 and store instances of letters
  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i]

    letterCount[letter] = true
  }

  for (let i = 0; i < string2.length; i++) {
    const letter = string2[i]

    if (letterCount[letter]) return 'YES'
  }

  return 'NO'
}

function commonSubstring(a, b) {
  // Write your code here

  a.forEach((string1, idx) => {
    const string2 = b[idx]
    console.log(commonSubstringUtil(string1, string2))
    return commonSubstringUtil(string1, string2)
  })
}