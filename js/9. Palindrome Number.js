const x = 121;
var isPalindrome = function(x) {
    const y = Number(String(x).split('').reverse().join(''));

    if(x===y){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(x));