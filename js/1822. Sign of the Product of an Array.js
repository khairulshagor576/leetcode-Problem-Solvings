//459. Repeated Substring Pattern
const nums = [-1,-2,-3,-4,3,2,1];

var arraySign = function(digits) {

  let num = digits.reduce((a,b)=>a*b );
  
  if(num>0)
  {
    return 1;
  }else if (num<0) {
    return -1;
  }else{
    return 0;
  }
  //return num;


};

console.log(arraySign(nums));