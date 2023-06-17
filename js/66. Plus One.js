//459. Repeated Substring Pattern
const nums = [1,2,3];

var plusOne = function(digits) {

  let num = digits.map((item)=> BigInt(item)).join("");
  let final_number = BigInt(num) + BigInt(1)
  let result = final_number.toString().split("")
  // console.log(final_number)
  return result

};

console.log(plusOne(nums));