
const nums = [10,4,8,3];

var leftRightDifference = function(nums) {
    let left=0;
    let right=0
    let answer=[]

    for (let i=0;i<nums.length;i++){
        right=right+nums[i]
    }
    for(let i=0;i<nums.length;i++){
        right=right-nums[i]
        answer[i]=Math.abs(left-right)
        left=left+nums[i]
    }return answer
};

console.log(leftRightDifference(nums));