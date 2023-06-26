let nums = [4,1,2,1,2];

var singleNumber = function(nums) 
{
    const nonDuplicateNumber =  nums.filter((e) =>
    nums.indexOf(e)===nums.lastIndexOf(e)
    );
    return nonDuplicateNumber;
};

console.log(singleNumber(nums));