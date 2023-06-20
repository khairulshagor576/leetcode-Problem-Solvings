
const s = "Hello World";

var lengthOfLastWord  = function(s) {
   let trimedWord = s.trim().split(" ");

   return trimedWord[trimedWord.length-1].length;
   //console.log(trimedWord);
};

console.log(lengthOfLastWord (s));