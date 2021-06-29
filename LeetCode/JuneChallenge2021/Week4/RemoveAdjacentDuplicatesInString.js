/**
 * https://leetcode.com/explore/featured/card/june-leetcoding-challenge-2021/606/week-4-june-22nd-june-28th/3794/
 *
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];

  s.split("").forEach((c) => {
    if (stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  });

  return stack.join("");
};

console.log(removeDuplicates("azxxzy"));
