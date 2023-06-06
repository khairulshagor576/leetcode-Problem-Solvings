const word1 = "abc"; 
const word2 = "arbc";


var findTheDifference = function(word1, word2) 
{
    const newWord1 = [...word1].sort();
    const newWord2 = [...word2].sort();

    return difference = newWord2.find((currentValue,i)=>{
    return currentValue!==newWord1[i];
   })

   
}  

findTheDifference(word1,word2); 


