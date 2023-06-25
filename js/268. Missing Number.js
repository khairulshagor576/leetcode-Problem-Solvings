const nums = [3,0,1];

var missingNumber = function(nums) 
{
    nums.sort((a,b)=>a-b);
    const arrLength=nums.length;
    for (let i = 0; i <=arrLength; i++) 
    {
        //console.log(i+"=="+nums[i]);
       if(i!==nums[i])
       {
         return i;
       } 
        
    }
};

console.log(missingNumber(nums));