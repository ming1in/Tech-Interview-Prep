/**
 * https://www.hackerrank.com/challenges/string-compression/problem
 */

function compressedString(message) {
  var result = '';
  var charCount = 0;
  for (var i = 0; i < message.length; i++) {
    charCount++;
    if (message[i] != message[i + 1]) {
      result += message[i] + charCount;
      charCount = 0;
    }
  }

  result = result.replace(/1/g, '')

  console.log(result);
  return result

}

compressedString('abaabbbc')