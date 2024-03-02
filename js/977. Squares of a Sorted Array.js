var  nums = [-4,-1,0,3,10];

var sortedSquares = function(nums) 
{
    let numsLength = nums.length;
    //console.log(numsLength);
    newNumberArray = [];
    for (let index = 0; index < numsLength; index++) 
    {
        newNumberArray.push(Math.pow(Math.abs(nums[index]),2));  
       
    }
    return newNumberArray.sort(function(a,b){return(a-b)});
};

console.log(sortedSquares(nums));