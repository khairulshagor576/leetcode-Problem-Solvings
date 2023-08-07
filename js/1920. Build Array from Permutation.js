let nums = [0,2,1,5,3,4];

var buildArray = function(nums) {
    let arrLength = nums.length;
    //console.log(arrLength);
    let result = [];

    for(let i=0;i<arrLength;i++){
        result[i]=nums[nums[i]];
    }

    return result;
};

console.log(buildArray(nums));