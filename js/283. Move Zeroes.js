//459. Repeated Substring Pattern
const nums = [0,1,0,3,12];

var moveZeroes = function(nums) {

  let nonZeroIndex = 0;
  for(let i=0; i<nums.length; i++)
  {
      if(nums[i] !==0)
      {
          nums[nonZeroIndex] = nums[i];
          nonZeroIndex++;
      }
  }
for(let i=nonZeroIndex; i<nums.length; i++)
{
    nums[i] =0;
}

return nums;

};

console.log(moveZeroes(nums));