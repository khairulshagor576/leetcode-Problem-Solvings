let nums = [1,2,1];

var getConcatenation = function(nums) 
{
    let len = nums.length;

    for(let i=0;i<len;i++){
        nums.push(nums[i]);
    }
    return nums;
};

console.log(getConcatenation(nums));