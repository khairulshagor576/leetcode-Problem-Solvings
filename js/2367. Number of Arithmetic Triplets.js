
const nums = [0,1,4,6,7,10], diff = 3;

var arithmeticTriplets = function(nums, diff) 
{
    let count=0;
    for(let i=0;i<nums.length-1;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            for(let k=j+1;k<nums.length;k++)
            {
                if(nums[j] - nums[i] === diff && nums[k] - nums[j] === diff){
                    count++;
                }
            }
        }
    }
    return count;
};

console.log(arithmeticTriplets(nums,diff));