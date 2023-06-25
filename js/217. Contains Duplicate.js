const nums = [1,2,3,4,];

var containsDuplicate = function(nums) 
{
    const arrCount = nums.length;

    const arrSet = new Set(nums);

    //console.log(arrCount+"=="+arrSet.size);

    if(arrCount==arrSet.size)
    {
      return false;
    }else{
        return true;
    }
};

console.log(containsDuplicate(nums));