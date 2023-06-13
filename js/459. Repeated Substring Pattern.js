//459. Repeated Substring Pattern
const s = "abab";

var repeatedSubstringPattern = function(s) {
  let repeatStr = s.repeat(2) 
  let sliceStr = repeatStr.slice(1,-1) 
  return sliceStr.includes(s)
}

repeatedSubstringPattern(s);