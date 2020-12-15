function minDeletions(arr) {
  // Write your code here
  var sub = new Array(arr.length).fill(1)
  var subLength = 0

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((sub[i] < sub[j] + 1) && (arr[i] > arr[j])) {
        sub[i] = sub[j] + 1
      }
    }
  }

  for (let i = 0; i < sub.length; i++) {
    if (subLength < sub[i]) { subLength = sub[i] }
  }

  var deletions = (arr.length - subLength) - 1

  if (deletions < 0) {
    return 0
  } else {
    return deletions
  }
}