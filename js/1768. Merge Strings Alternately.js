const word1 = "abc"; const word2 = "pqr";

var mergeAlternately = function(word1, word2) {
    let result = [];
    let maxLength = Math.max(word1.length, word2.length);
    //console.log(maxLength);

    for(let i = 0; i < maxLength; i++){
        if(word1[i]) result.push(word1[i])
        if(word2[i]) result.push(word2[i])
    }

    return result.join('')
};

//console.log(mergeAlternately(word1,word2));


