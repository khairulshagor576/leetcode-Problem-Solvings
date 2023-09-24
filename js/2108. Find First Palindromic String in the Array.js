
const words = ["abc","car","ada","racecar","cool"];

var firstPalindrome = function(words) 
{
    for(const word of words)
    {
        if(word===word.split('').reverse().join(''));return word;

    }
    return '';
};

console.log(firstPalindrome(words));