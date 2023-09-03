
const s = "Let's take LeetCode contest";

var reverseWords = function(s) 
{
   let splitWord = s.split(' ');
   let splitWordNew = splitWord.map(word=>word.split('').reverse().join(''));

   return splitWordNew.join(' '); 
};

console.log(reverseWords(s));