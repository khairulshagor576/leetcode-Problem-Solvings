//459. Repeated Substring Pattern 
symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

const s = "MI"

var romanToInt  = function(s) {
  value = 0;
  for(let i = 0; i < s.length; i++)
  {
    if(symbols[s[i]] < symbols[s[i+1]])//5<500
    {
      value -= symbols[s[i]];
    }else{
      value += symbols[s[i]];
    }
   
  }
  return value;
};

console.log(romanToInt (s));