const nums = [1,1,1,1,1];

var runningSum = function(nums) {
    
    let result =[];
    let value =0;
    for(let i=0;i<nums.length;i++){
        value+=nums[i];
        result.push(value);
    }
    return result;
};

console.log(runningSum(nums));