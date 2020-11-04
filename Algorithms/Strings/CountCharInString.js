function CountCharInString(string) {

  var count ={}
 
  for (let i = 0; i < string.length; i++){
    if (count[string[i]]) {
      count[string[i]]++
    } else {
      count[string[i]] = 1
    }
  }

  console.log(count)
  return count
}

CountCharInString('asdhafsdjfhiuewrbdbsfasgdhfoweqrljdflahsdsdfgsdfgwaertjhghkjlhjkdtfhwagsdfghdfsiufsdz')