
const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function(sentences) {
    let maxValue =0;

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(" ").length;
        if(words>maxValue){
            maxValue=words;
        }
    }
    return maxValue;
};

console.log(mostWordsFound(sentences));