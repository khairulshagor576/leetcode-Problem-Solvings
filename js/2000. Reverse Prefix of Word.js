const word = "abcdefd", ch = "d";

var reversePrefix = function(word, ch) {
  
    let left = 0;
    let right = word.indexOf(ch);

    //console.log(right);return;
    
    if(right === -1) return word;
       
    word = word.split('');
    while(left <= right) {
        [word[left], word[right]] = [word[right], word[left]];    
        left++;
        right--;
    }
    
    return word.join('');
};

console.log(reversePrefix(word, ch));